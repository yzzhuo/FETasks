module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loader: [
            {test: /\.js$/,loader: 'babel-loader'}
        ]
    }
}