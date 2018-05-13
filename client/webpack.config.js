var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel',
                 query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    "plugins": ["transform-runtime"]
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [
        new webpack.ProvidePlugin({
          "React": "react",
        }),
      ]
 };