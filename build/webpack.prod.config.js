//生产环境(线上环境) webpack.prod.config.js

//引入webpack-merge插件进行合并
const {merge} = require("webpack-merge");
//引入webpack.base.config.js文件
const base = require("./webpack.base.config");

//进行合并
module.exports = merge(base,{
    //模块参数
    mode:"production",
    //...
});
