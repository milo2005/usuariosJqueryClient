const webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/app",
    output:{
        filename:"build.js",
        path:"./build"
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:"style-loader!css-loader"}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
            template:"index.html"
        })
    ]
};