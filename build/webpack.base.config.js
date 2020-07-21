//判断项目运行的环境
const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);

//node模块 用于处理文件路径，包括 normalize join resolve isAbsolute relative等方法
const path = require('path');

//清理上一次构建的dist文件夹中的文件
const CleanWebpackPlugin = require("clean-webpack-plugin");

//生成创建Html入口文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//将css提取到单独的文件中
const MiniCssExtract = require("mini-css-extract-plugin");

//压缩css文件
const OptimizeCss = require("optimize-css-assets-webpack-plugin");

//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//引入webpack，访问webpack内置插件
const webpack = require("webpack");

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
