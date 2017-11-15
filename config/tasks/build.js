const gulp       = require( 'gulp' );
const header     = require( 'gulp-header' );
const rename     = require( 'gulp-rename' );
const webpack    = require( 'webpack-stream' );

const config = require( './settings' );

const output = config.paths.output;

const dev = () => {
  console.log( 'building on develop......');

  const webpackConfig = require( '../webpack.config' )( 'dev' );

  return gulp.src( 'config/build-utils/index.js' )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( output.views ) );
};

const prod = () => {
  console.log( 'building on production......');

  const webpackConfig = require( '../webpack.config' )( 'pro' );

  return gulp.src( 'config/build-utils/index.js' )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( output.views ) )
    .pipe( header( config.banner ) )
    .pipe( rename( ( path ) => {
      path.basename += '.min';
      return path;
    } ) );
};

module.exports = { dev, prod };