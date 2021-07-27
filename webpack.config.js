const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'Nomflix Setting',
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },

  entry: {
    app: path.join(__dirname, 'src/index'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
