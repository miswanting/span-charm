const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

script = {
    entry: './src/span-charm.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'span-charm.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}
style = {
    entry: './src/span-charm.sass',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'span-charm.css'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            }
        ]
    }
}
module.exports = [style, script]