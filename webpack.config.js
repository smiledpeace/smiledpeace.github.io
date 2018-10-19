
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const rules = [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
        })
    },
    {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'less-loader']
        })
    },
    {
        test: /\.pcss/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
        })
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'stage-2']
        }
    },
    {
        test: /vux.src.*?js$/,
        use: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader']}),
                    // you can also include <style lang="less"> or other langauges
                    // less: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})
                }
            }
        }
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
    }
];

module.exports = {
    entry: 'G:/project/smiledpeace.github.io/src/main.js',
    output: {
        path: '/project/smiledpeace.github.io/src/bundle',
        filename: 'bundle.js',
        // publicPath: '/newera/bundle/'
    },

    module: {
        rules
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.vue'],
        /** 
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
         */
        // alias: {
        //     vue: 'vue/dist/vue.js'
        // }
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     },
        // }),
        // 处理外部引入文件不能打包问题
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                babel: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime']
                },
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader']}),
                        // you can also include <style lang="less"> or other langauges
                        less: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})
                    }
                }
            }
        }),
        new ExtractTextPlugin('/style.min.css')
    ],
};