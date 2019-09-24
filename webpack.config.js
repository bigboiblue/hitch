const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/App.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src"),
                loader: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devtool: "cheap-module-source-map",
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin(
            { template: path.resolve(__dirname, "src/index.html") },
        ),
    ],
};
