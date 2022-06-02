const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    watch: true,
    mode: 'production',
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src', 'css'),
                use: ['style-loader', 'css-loader', 'postcss-loader']

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}