const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {

    entry:'./src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build/dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    devtool:"source-map",
    watch: false,
    devServer: {
        clientLogLevel: 'error',
        contentBase: path.resolve(__dirname, 'build/dist/'),
        inline: true,
        hotOnly: true,
        historyApiFallback: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        port: 8082,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/',
        //         pathRewrite: {'^/api' : ''}
        //     }
        // }
    },
    module:{
        rules:[

            {
                test: /\.tsx?$/,
                use: [{
                    // https://www.npmjs.com/package/ts-loader
                    loader: 'ts-loader',
                    options: {
                        // https://github.com/Realytics/fork-ts-checker-webpack-plugin
                        transpileOnly: true,
                        // https://ant.design/docs/react/use-in-typescript
                        // https://github.com/Brooooooklyn/ts-import-plugin
                        getCustomTransformers: () => ({
                            before: [tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'es',
                                style: 'css',
                            })],
                        }),
                    },
                }],
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [{
                    // https://www.npmjs.com/package/tslint-loader
                    // https://palantir.github.io/tslint/usage/configuration/
                    loader: 'tslint-loader',
                    options: {},
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        
                    },
                ],
                // ,
                // include: [path.resolve(__dirname, 'src')], // 样式只应用到这个文件夹下面的css文件中
            },
            // 下面的less-loader是为了支持antd
            // less-loader的文档： https://www.npmjs.com/package/less-loader
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        // https://github.com/Quramy/typed-css-modules
                        loader: 'typed-css-modules-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        }
                    },
                    {
                        loader:  'typed-css-modules-loader'
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpng|eot|ttf)$/,
                loader: 'url-loader?limit=8192&name=src/images/[name].[ext]',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
}

module.exports = config;