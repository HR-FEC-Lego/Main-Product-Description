const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'client', 'src')],
        exclude: [path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'server'),
          path.resolve(__dirname, 'db'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};