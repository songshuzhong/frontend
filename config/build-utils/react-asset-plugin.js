/**
 * Created by Steven Song on 2017/11/20.
 */
const { RawSource } = require( 'webpack-sources' );

class ReactPlugin {
  constructor( options = {} ) {
    this.options = options;
  }

  apply( compiler ) {
    compiler.plugin( "emit", ( compilation, callback ) => {
      compilation.chunks.forEach( ( chunk ) => {
        chunk.files.forEach( ( filename ) => {
          if ( filename.includes( `js/bundle.` ) ) {
            const hash = compilation.fullHash.substring( 0, 5 );
            const source = compilation.assets[ filename ].source().toString();
            const newSource = source
                .replace( /JAVASCRIPT_SOURCE_PLACEHOLDER/g, `js/bundle.${ hash }.js` )
                .replace(/STYLESHEET_SOURCE_PLACEHOLDER/g, `cs/main.${ hash }.css`)
                .replace(/TITLE_SOURCE_PLACEHOLDER/g, 'cop-eportal' );
            compilation.assets[ filename ] = new RawSource( newSource );
          }
        });
      });

      callback();
    });
  }
}

module.exports = ReactPlugin;