require('babel-core/register');

const path = require('path');
const webpack = require('webpack');

const nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');

module.exports = {
    devtool: 'source-map',
    entry: {
        app1: './src/app1/app.js',
        app2: './src/app2/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/bundles/'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
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
