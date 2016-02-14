var path = require('path');
var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};

module.exports = config;
