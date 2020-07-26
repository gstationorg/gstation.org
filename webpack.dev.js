const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"        
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./src/"),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader", // Puts JS styles to DOM
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [ {
                        loader: "style-loader",
                    }, {
                        loader: "css-loader",
                    }, {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [
                                    require("precss"),
                                    require("autoprefixer")
                                ]
                            }
                        }
                    }, {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
})