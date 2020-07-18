const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
const isProduction = argv.mode === "production";
const config = {
    entry: "./src/index.jsx",
    output: {
    filename: "bundle.js",
    path: __dirname + '/review_build',

    },
    module: {
    rules: [
        {
        test: /.jsx?$/,
        use: ["babel-loader"]
        },
        {
        test: /.s?css$/,
        use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader"
        ]
        }
    ]
    },
    plugins: [
    
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
    ],
    resolve: {
    extensions: [".js", ".jsx"]
    },
    devServer: {
    hot: true
    }
};

if (isProduction) {
    config.plugins.push(
    new MiniCssExtractPlugin({
        filename: "[name].css"
    })
    );
}

return config;
};