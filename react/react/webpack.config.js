
//在webpack4.x中，有许多默认配置；目的是为了尽量减少配置文件的体积
//1.约定了打包的入口是src>index.js
//2.打包的输出文件是dist>main.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 创建插件的实例
const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'// 在内存中生成的页面名称
})
module.exports = {
    mode:"development",//development production
    plugins:[
        htmlPlugin
    ],
    module:{//所以第三方模块配置规则
        rules: [
            {
              test: /\.js|jsx$/,
              use:  'babel-loader',
              exclude: /node_modules/            
            },{
                test: /\.css$/,
                use:  ['style-loader','css-loader?modules']//?modules,普通样式表启用模块化
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//表示这几个文件的后缀名可以不写
        alias:{
            '@':path.join(__dirname,'./src')//这样@就代表项目根目录中src这一层路径
        }
    }
}