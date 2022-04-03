const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // alias: {
  //   '@': path.resolve(__dirname, 'src'),
  //   '@assets': path.resolve(__dirname, 'src/assets'),
  //   '@components': path.resolve(__dirname, 'src/components'),
  //   '@services': path.resolve(__dirname, 'src/services'),
  //   '@store': path.resolve(__dirname, 'src/store'),
  //   '@utils': path.resolve(__dirname, 'src/utils'),
  //   '@views': path.resolve(__dirname, 'src/views'),
  // },

  entry: ['./src/index.js', /*'./sass/app.scss'*/],
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: [/node_modules/],
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env','@babel/react'],
            plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']

          }
        }
      
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'async',
      minSize: 10000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new CopyWebpackPlugin([{ from: 'assets/images', to: 'images' }]),
  ],

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'https://api.shiromdk.com',
    }),
  },
}
