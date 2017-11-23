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
          if ( filename.includes( `js/${ this.options.js }.` ) ) {
            const { js, cs, title, contextPath } = this.options;
            const hash = compilation.fullHash.substring( 0, 5 );
            const source = compilation.assets[ filename ].source().toString();
            const newSource = source
                .replace( /STYLESHEET_SOURCE_PLACEHOLDER/g, `${ contextPath }/static/cs/${ cs }.${ hash }.css` )
                .replace( /JAVASCRIPT_SOURCE_PLACEHOLDER/g, `${ contextPath }/static/js/${ js }.${ hash }.js` )
                .replace( /CONTEXTPATH_SOURCE_PLACEHOLDER/g, `${ contextPath }` )
                .replace( /TITLE_SOURCE_PLACEHOLDER/g, `${ title }` );
            compilation.assets[ filename ] = new RawSource( newSource );
          }
        });
      });

      callback();
    });
  }
}

module.exports = ReactPlugin;