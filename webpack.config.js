"use strict";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {};

// Merge in prod settings
Object.assign(config, require("./webpack.production.config.js"));

// Override
config.devtool = "source-map"; // add sourcemaps
config.module.loaders[2].loader = ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap"); // css sourcemaps

module.exports = config;