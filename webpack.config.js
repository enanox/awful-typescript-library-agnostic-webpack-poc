var path = require('path');

module.exports = {
    context: path.join(__dirname, "."),
    entry: './index.ts',
    resolve: {    
        modules: ["node_modules", "."],
        extensions: ['.webpack.js', '.ts', '.js', ".html"]
    },
    output: {
        filename: 'bundle.js',
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {test: /\.(ts)$/, use: 'ts-loader'}
        ]
    }
};