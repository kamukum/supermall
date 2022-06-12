const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry:'./src/main.js',

  output:{
    path:path.join(__dirname, 'dist'),
    filename:'bundle.js'
  },

  module:{
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
],
}