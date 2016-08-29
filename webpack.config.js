"use strict";
const Webpack = require("webpack")
    , ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/web-src/index.js",
    output: {
        path: "./src/public",
        filename: "build.js",
    },
    // devtool: "source-map",
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            IScroll: "iscroll"
        }),
        new ExtractTextPlugin({
            filename: "build.css"
        })
    ]
};

module.exports = config;