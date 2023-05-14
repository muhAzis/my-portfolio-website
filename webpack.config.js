const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
