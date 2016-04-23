var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build/assets"),
        publicPath: 'http://localhost:8090/assets'
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
    externals: {
        react: 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
