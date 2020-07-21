//判断项目运行的环境
const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);

//node模块 用于处理文件路径，包括 normalize join resolve isAbsolute relative等方法
const path = require('path');

//清理上一次构建的dist文件夹中的文件
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    //webpack 入口文件
    entry: "",
    //webpack 输出文件
    output: {

    },
    //配置插件
    plugins: [

    ],
    //loader加载器模块配置
    module: {
        rules: [

        ]
    }
};
