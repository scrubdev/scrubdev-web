"use strict";
const Webpack = require("webpack")
    , ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/web-src/index.js",
    output: {
        path: "./src/public/build",
        filename: "bundle.js",
        publicPath: "/static/build/"
    },
    // devtool: "source-map",
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },

            // https://gist.github.com/Turbo87/e8e941e68308d3b40ef6 - font awesome font loading
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            IScroll: "iscroll"
        }),
        new ExtractTextPlugin("bundle.css")
    ]
};

module.exports = config;