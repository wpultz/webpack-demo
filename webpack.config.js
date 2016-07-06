/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');

var entries;
/* eslint-enable */
if (process.env.NODE_ENV === 'production') {
    entries = {
        app1: './src/app1/app.js',
        app2: './src/app2/app.js'
    };
} else {
    entries = {
        app1: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/app1/app.js'
        ],
        app2: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/app2/app.js'
        ]
    };
}

module.exports = {
    devtool: 'source-map',
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/bundles/'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
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
