var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin()),
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

plugins.push(new HtmlWebpackPlugin({
    title: 'AXIS',
    filename: 'index.html',
    template: path.resolve(__dirname, "src/client/template") + '/index.ejs',
    inject: 'body'
}));

plugins.push(new CopyWebpackPlugin([
    {
        from: path.resolve(__dirname, "src/client/vendor") + '/react-with-addons.min.js',
        to: "assets/react-with-addons.min.js"
    }
]));

module.exports = {
    devServer: {
        // This is required for webpack-dev-server. The path should
        // be an absolute path to your build destination.
        outputPath: path.join(__dirname, 'dist/client')
    },
    entry: {
        app: ['./src/client/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist/client")//,
        //publicPath: 'http://localhost:8080/assets'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: plugins,
    externals: {
        react: 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
