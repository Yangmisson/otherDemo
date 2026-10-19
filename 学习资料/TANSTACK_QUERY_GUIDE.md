# TanStack Query 中文文档（useQuery / useMutation）

> 本文档基于项目实际代码整理，示例来自 `packages/hooks/src/pc/useRoster.ts` 与 `packages/hooks/src/pc/useExampleList.ts`。

---

## 一、useQuery — 查询（读操作）

用于获取服务端数据，自动管理缓存、加载、错误状态。

### 1. 参数（Options）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `queryKey` | `unknown[]` | ✅ | 查询的唯一标识，用于缓存和失效。**数组**，通常用字符串前缀 + 参数组成，如 `['roster', 'page', params]`。参数变化会生成不同缓存 |
| `queryFn` | `(context) => Promise<T>` | ✅ | 实际发起请求的函数，返回 Promise。如 `() => rosterApi.getPage(params)` |
| `enabled` | `boolean` | ❌ | 是否自动执行查询。`false` 时不发请求，常用于「有 id 才查」或「条件满足才查」 |
| `staleTime` | `number` | ❌ | 数据被视为「新鲜」的毫秒数，期间不重新请求 |
| `gcTime` | `number` | ❌ | 缓存保留时间（默认 5 分钟） |
| `refetchOnWindowFocus` | `boolean` | ❌ | 窗口重新聚焦时是否重新请求 |
| `retry` | `number \| boolean` | ❌ | 失败重试次数 |
| `select` | `(data) => T` | ❌ | 对返回数据做转换/裁剪 |
| `placeholderData` | `T \| () => T` | ❌ | 占位数据，让页面先有内容 |
| `initialData` | `T` | ❌ | 初始数据，直接作为缓存值 |

### 2. 返回（Result）

| 返回字段 | 类型 | 说明 |
| --- | --- | --- |
| `data` | `T \| undefined` | 请求成功后的数据 |
| `isLoading` | `boolean` | 首次加载中（无缓存数据） |
| `isFetching` | `boolean` | 是否正在请求（含后台刷新） |
| `isError` | `boolean` | 是否出错 |
| `error` | `Error \| null` | 错误对象 |
| `isSuccess` | `boolean` | 是否成功 |
| `isPending` | `boolean` | 是否处于 pending 状态 |
| `refetch` | `() => Promise` | 手动重新请求 |
| `remove` | `() => void` | 移除该查询缓存 |
| `status` | `'pending' \| 'error' \| 'success'` | 查询状态 |
| `fetchStatus` | `'fetching' \| 'paused' \| 'idle'` | 请求状态 |

### 3. 项目实际示例

`packages/hooks/src/pc/useRoster.ts` 的分页列表：

```ts
export function useRosterPage({ client, params, enabled = true }: UseRosterPageOptions) {
  const rosterApi = createRosterModule(client);

  return useQuery({
    queryKey: ['roster', 'page', params],
    queryFn: () => rosterApi.getPage(params),
    enabled,
  });
}
```

带条件查询的详情，`id` 为空时不发请求：

```ts
export function useRosterDetail({ client, id, enabled = true }: UseRosterDetailOptions) {
  const rosterApi = createRosterModule(client);

  return useQuery({
    queryKey: ['roster', 'detail', id],
    queryFn: () => rosterApi.getById(id!),
    enabled: enabled && id != null,
  });
}
```

---

## 二、useMutation — 变更（写操作）

用于新增、编辑、删除等写操作，不自动执行，需要手动调用 `mutate`。

### 1. 参数（Options）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `mutationFn` | `(variables) => Promise<T>` | ✅ | 实际执行写操作的函数，接收调用时传入的变量。如 `(params) => rosterApi.save(params)` |
| `onSuccess` | `(data, variables, context) => void` | ❌ | 成功后回调，常用于失效缓存、刷新列表 |
| `onError` | `(error, variables, context) => void` | ❌ | 失败后回调 |
| `onSettled` | `(data, error, variables, context) => void` | ❌ | 无论成败都会执行 |
| `onMutate` | `(variables) => context` | ❌ | 执行前回调，常用于乐观更新 |
| `retry` | `number \| boolean` | ❌ | 失败重试次数 |

### 2. 返回（Result）

| 返回字段 | 类型 | 说明 |
| --- | --- | --- |
| `mutate` | `(variables, options?) => void` | 触发变更（不返回 Promise） |
| `mutateAsync` | `(variables, options?) => Promise<T>` | 触发变更并返回 Promise，可 await |
| `data` | `T \| undefined` | 成功后的返回数据 |
| `error` | `Error \| null` | 错误对象 |
| `isPending` | `boolean` | 是否提交中 |
| `isSuccess` | `boolean` | 是否成功 |
| `isError` | `boolean` | 是否失败 |
| `isIdle` | `boolean` | 尚未调用 mutate |
| `reset` | `() => void` | 重置 mutation 状态 |
| `status` | `'idle' \| 'pending' \| 'error' \| 'success'` | 变更状态 |

### 3. 项目实际示例

`packages/hooks/src/pc/useRoster.ts` 的新增/更新，成功后失效 `['roster']` 前缀的所有查询：

```ts
export function useRosterSave({ client }: UseRosterSaveOptions) {
  const rosterApi = createRosterModule(client);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: RosterSaveParams) => rosterApi.save(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roster'] });
    },
  });
}
```

---

## 三、useQueryClient — 获取全局客户端

在组件/hook 里拿到全局 `QueryClient`，用于手动操作缓存：

| 方法 | 说明 |
| --- | --- |
| `invalidateQueries({ queryKey })` | 失效指定前缀的查询，触发重新请求 |
| `setQueryData(key, data)` | 直接写入缓存 |
| `getQueryData(key)` | 读取缓存 |
| `removeQueries(key)` | 移除缓存 |
| `refetchQueries(key)` | 强制重新请求 |

项目里 `useRosterSave` 等 mutation 都通过 `useQueryClient()` 拿到实例，再调用 `invalidateQueries` 刷新列表。

---

## 四、项目中的使用模式总结

1. **hooks 层封装**：`packages/hooks` 把 `useQuery` / `useMutation` 封装成业务 hooks（如 `useRosterPage`、`useRosterSave`），页面组件直接调用，不接触 axios。
2. **queryKey 前缀约定**：同一业务用统一前缀（如 `['roster', ...]`），这样 mutation 成功后 `invalidateQueries({ queryKey: ['roster'] })` 能一次性刷新该业务所有列表。
3. **enabled 控制条件查询**：详情类查询用 `enabled: enabled && id != null`，避免 id 为空时发无效请求。
4. **全局 Provider**：`App.tsx` 里用 `QueryClientProvider` 包住整个应用，所有 hooks 共享同一个缓存实例。
