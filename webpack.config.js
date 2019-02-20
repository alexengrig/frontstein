const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    example: './examples/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
};
