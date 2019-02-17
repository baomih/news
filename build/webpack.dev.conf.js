'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
    // ===================
const express = require('express')
const app = express()
var appData = require('../mock/goods.json')
var newsData = require('../mock/news.json')
var news_hotData = require('../mock/news_hot.json')
var news_societyData = require('../mock/news_society.json')
var news_entertainmentData = require('../mock/news_entertainment.json')
var news_techData = require('../mock/news_tech.json')
var news_carData = require('../mock/news_car.json')
var news_sportsData = require('../mock/news_sports.json')
var news_financeData = require('../mock/news_finance.json')
var news_militaryData = require('../mock/news_military.json')
var news_worldData = require('../mock/news_world.json')
var news_fashionData = require('../mock/news_fashion.json')
var goods = appData.result
var apiRouter = express.Router()
app.use(apiRouter)
    //============================

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
        //==========================================
        before(app) {
            app.get('/goods', function(req, res) {
                res.json({
                    data: goods
                })
            })
            app.get('/news', function(req, res) {
                res.json({
                    errno: 0,
                    data: newsData
                })
            })
            app.get('/news_hot', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_hotData
                })
            })
            app.get('/news_society', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_societyData
                })
            })
            app.get('/news_entertainment', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_entertainmentData
                })
            })
            app.get('/news_tech', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_techData
                })
            })
            app.get('/news_car', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_carData
                })
            })
            app.get('/news_sports', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_sportsData
                })
            })
            app.get('/news_finance', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_financeData
                })
            })
            app.get('/news_military', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_militaryData
                })
            })
            app.get('/news_world', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_worldData
                })
            })
            app.get('/news_fashion', function(req, res) {
                res.json({
                    errno: 0,
                    data: news_fashionData
                })
            })
        }
        //============================================

    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})
