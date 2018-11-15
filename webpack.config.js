path = require('path')

module.exports = {
    entry: './src/scripts/index.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src/pages')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}

/**
 * * mode : specify a mode (development, production or none)
 * ! user ts-loader for files with externsion .ts
 * ! user css-loader for files with externsion .css
 * * resolve : specify which file types we can import from
 * ! exclude : where we dont want to transpile our typscript files
 * * devTool : controls how source maps are generated
 */