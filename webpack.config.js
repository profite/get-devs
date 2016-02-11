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
            }
        ]
    }
};

module.exports = config;
