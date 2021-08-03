const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'Nomflix Setting',
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },

  entry: {
    app: ['core-js', 'regenerator-runtime/runtime', path.join(__dirname, 'src/index')],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: ['>0.2%', 'not dead', 'not op_mini all'] }],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build',
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
