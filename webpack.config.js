const path = require('path');

module.exports = {
    entry: {
        'ygg': './src/index.ts',
        'ygg.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'ygg',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.ts/, use: 'ts-loader' }
        ]
    }
};