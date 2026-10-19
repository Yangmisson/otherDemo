/**
 * OSS 文件上传工具。
 *
 * 返回一个 Promise，并在 Promise 上附加 cancel() 方法：
 * const task = uploadFile(options);
 * task.then(result => console.log(result.url));
 * task.catch(error => console.error(error));
 * task.cancel();
 *
 * 调用方需要先获取 OSS STS 临时凭证，并通过 credentials 参数传入。
 * 依赖：页面需要先加载 ali-oss 浏览器 SDK，并提供全局 OSS。
 */
export function uploadFile(options = {}) {
  const {
    file,
    credentials,
    region,
    bucket,
    uploadHost,
    viewHost,
    useMultipart = false,
    partSize = 1024 * 1024,
    objectKey = createObjectKey(file),
    progress: onProgress = () => {},
    success: onSuccess = (() => {}),
    fail: onFail = () => {}
  } = options;

  if (typeof OSS === 'undefined') {
    return Promise.reject(new Error('未找到 OSS SDK，请先引入 aliyun-oss-sdk。'));
  }

  let client = null;
  let cancelled = false;

  const uploadPromise = (async () => {
    try {
      if (!file) throw new Error('缺少要上传的文件');
      if (!credentials) throw new Error('缺少 OSS 临时凭证 credentials');
      if (!region) throw new Error('缺少 region');
      if (!bucket) throw new Error('缺少 bucket');
      if (!uploadHost) throw new Error('缺少 uploadHost');
      if (!viewHost) throw new Error('缺少 viewHost');
      if (cancelled) throw createCancelledError();

      client = new OSS({
        region,
        endpoint: uploadHost,
        bucket,
        accessKeyId: credentials.accessKeyId,
        accessKeySecret: credentials.accessKeySecret,
        stsToken: credentials.securityToken,
        secure: true
      });

      let uploadResult;
      if (useMultipart) {
        uploadResult = await client.multipartUpload(objectKey, file, {
          partSize,
          progress: (percentage) => onProgress(Math.floor(percentage * 100), percentage)
        });
      } else {
        uploadResult = await client.put(objectKey, file);
        onProgress(100, 1);
      }

      if (cancelled) throw createCancelledError();

      const uploadedKey = uploadResult.name || objectKey;
      const url = `${viewHost}/${uploadedKey.split('/').map(encodeURIComponent).join('/')}`;
      const result = { ...uploadResult, objectKey: uploadedKey, url };
      onSuccess(result);
      return result;
    } catch (error) {
      if (cancelled) error = createCancelledError();
      onFail(error);
      throw error;
    }
  })();

  uploadPromise.cancel = () => {
    if (cancelled) return;
    cancelled = true;
    if (client) client.cancel();
  };

  return uploadPromise;
}

function createCancelledError() {
  const error = new Error('用户取消上传');
  error.code = 'UPLOAD_CANCELLED';
  return error;
}

function createObjectKey(file) {
  if (!file) return '';
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const id = crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '/');
  return `uploads/${date}/${id}-${safeName}`;
}
