var webpack = require('webpack');
var path = require('path');

var webpackConf = require('./webpack.config.dev');

module.exports = function (config) {

    var runCoverage = process.env.COVERAGE === 'true';

    var coverageLoaders = [];
    var coverageReporters = [];

    if (runCoverage) {
        coverageLoaders.push({
            test: /\.jsx?/,
            include: path.resolve(__dirname, '<%= jsSrcPath %>'),
            loader: 'isparta'
        });

        coverageReporters.push('coverage');
    }

    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],

        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'tests.webpack.js'
        ],

        preprocessors: {
            '<%= jsSrcPath %>/**/*.js': ['babel'],
            'tests.webpack.js': ['webpack', 'sourcemap']
        },

        reporters: ['mocha'].concat(coverageReporters),

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
                ].concat(coverageLoaders)
            },
            plugins: [
                new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('test') })
            ],
            resolve: webpackConf.resolve,
            // this is for enzyme to work properly on react 14/15
            externals: {
                cheerio: 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            }
        },

        webpackServer: {
            noInfo: true
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },

        coverageReporter: {
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: '.' }
            ]
        },

        singleRun: true
    });
};
