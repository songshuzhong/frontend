/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

const dev = {
  entry: './config/build-utils/index.js',

  output: {
    filename: 'js/bundle.js',
    library: 'EPMUIApp',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.(js|jsx?)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader'})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=media/[name].[ext]']}
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: "cs/main.css", disable: false, allChunks: true }),
  ]
};

const pro = {
  entry: './config/build-utils/index.js',

  output: {
    filename: 'js/bundle.js',
    library: 'EPMUIApp',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.(js|jsx?)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader'})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=media/[name].[ext]']}
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: "cs/main.css", disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin( { output: { comments: false }, compress: { warnings: false } } )
  ]
};

module.exports = ( mode ) => {
  let mergedConfig = {};

  switch ( mode ) {
    default:
    case 'dev':
      mergedConfig = dev;
      break;
    case 'pro':
      mergedConfig = pro;
      break;
  }
  return mergedConfig;
};
