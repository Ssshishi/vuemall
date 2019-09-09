const htmlWebpackPlugin = require('html-webpack-plugin');   //引入HTML插件
// const { cleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件

const webpackConfig= {
    mode: "development",
    entry: "./src/main.js",
    output:{
        path:__dirname + "/dist",
        filename:"[name]-test-[hash:8].js"
    },
    devtool: 'eval-source-map',
    module:{
        rules:[
            {
                test: /\.css/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename:'index.html',                            //根目录入口页面名称
            title: 'demo'
        })
        // new cleanWebpackPlugin(['dist'])
    ]
}

module.exports = webpackConfig;
