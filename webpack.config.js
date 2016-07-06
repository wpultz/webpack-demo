/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');
/* eslint-enable */
module.exports = {
    devtool: 'source-map',
    entry: {
        app1: './src/app1/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
        ]
    },
    resolve: {
        alias: {
            react: 'react'
        },
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: [
            'node_modules'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': nodeEnv })
    ]
};
