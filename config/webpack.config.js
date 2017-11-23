/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const webpack = require( 'webpack' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

const ReactAssetPlugin = require( './build-utils/react-asset-plugin' );
const CleanWebpackPlugin = require( './build-utils/clean-webpack-plugin' );

const settings = require( './tasks/settings' );

const dev = {
  entry: './config/module-utils/index.js',

  output: {
    path: settings.paths.output.views,
    filename: `static/js/${settings.config.js}.[hash:5].js`,
    libraryTarget: 'umd',
    library: 'EPMUIApp'
  },

  module: {
    loaders: [
      {test: /\.json$/, loader: "json"},
      {test: /\.(js|jsx?)$/, exclude: /node_modules/, use:['babel-loader']},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ publicPath: '../..', use:[ 'css-loader','less-loader'], fallback: 'style-loader'})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=static/images/[name].[ext]'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=/static/media/[name].[ext]']}
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ManifestPlugin( { fileName: `${settings.paths.output.views}/static/asset-manifest.json` } ),
    new ExtractTextPlugin({ filename: `static/cs/${settings.config.cs}.[hash:5].css`, disable: false, allChunks: true }),
    new CleanWebpackPlugin( [ `${settings.paths.output.views}/static/js/`,`${settings.paths.output.views}/static/cs/`], { verbose: false, dry: false, watch: true } ),
    new ReactAssetPlugin( { ...settings.config } ),
  ]
};

const pro = {
  entry: './config/module-utils/index.js',

  output: {
    path: settings.paths.output.views,
    filename: `static/js/${settings.config.js}.[hash:5].js`,
    libraryTarget: 'umd',
    library: 'EPMUIApp'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.(js|jsx?)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ publicPath: '../..', use:[ 'css-loader','less-loader'], fallback: 'style-loader'})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=static/images/[name].[ext]'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=static/media/[name].[ext]']}
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ManifestPlugin( { fileName: `${settings.paths.output.views}/static/asset-manifest.json` } ),
    new ExtractTextPlugin({ filename: `static/cs/${settings.config.cs}.[hash:5].css`, disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin( { output: { comments: false }, compress: { warnings: false } } ),
    new CleanWebpackPlugin( [ `${settings.paths.output.views}/static/js/`,`${settings.paths.output.views}/static/cs/`], { verbose: false, dry: false, watch: true } ),
    new ReactAssetPlugin( { ...settings.config } ),
    new BundleAnalyzerPlugin( { analyzerMode: 'static', reportFilename: 'static/app.bundle.report.html', defaultSizes: 'parsed', openAnalyzer: false, logLevel: 'info' } )
  ]
};

module.exports = ( mode = process.env.NODE_ENV ) => {
  let mergedConfig = {};
  switch ( mode ) {
    default:
    case 'dev':
      mergedConfig = dev;
      break;
    case 'production':
      mergedConfig = pro;
      break;
  }

  return mergedConfig;
};
