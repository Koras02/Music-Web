/* eslint-disable */
module.exports = {
    entry: './public/index.js',

    output: {
        path: _dirname + '/public/'
        fillename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: _dirname + '/public/'
    },
    node: {
         fs: 'empty',
    },
    module: {
        loaders: [
          {
             test: /\.js$/,
             loader: 'babel',
             exclude: /node_modules/,
             query: {
               cacheDirectory: true,
               presets: ['es2015', 'react']
             }
          }
      ]
    }
};           
