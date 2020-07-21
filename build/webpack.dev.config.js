// 开发环境(测试环境) webpack.dev.config.js

//引入webpack-merge插件进行合并
const {merge} = require("webpack-merge");
//引入webpack.base.config.js文件
const base = require("./webpack.base.config");
//引入webpack，访问webpack内置插件
const webpack = require("webpack");

//进行合并
module.exports = merge(base,{
    //模块参数
    mode:"development",
    //...
});

