"use strict";
const webpack = require("webpack");

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
            { test: /\.js$/, loader: "babel" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            IScroll: "iscroll"
        })
    ]
};

module.exports = config;