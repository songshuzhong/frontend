import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import uuid from '../../utilities/uuid';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 通用导航栏
 */
class Product_Item extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      hover: ''
    };

    this.handleMouseEnter = this.handleMouseEnter.bind( this );
    this.handleMouseLeave = this.handleMouseLeave.bind( this );
  }

  handleMouseEnter(){
    this.setState( { hover: 'hover' } );
  }

  handleMouseLeave() {
    this.setState( { hover: '' } );
  }

  render(){
    let imgs=[], data=[];
    const { hover } = this.state;
    const { resCodeName, resName, items } = this.props.dataSource;

    if ( items ) {
      items.map( ( item ) => {
        if ( item.fragTitle.startsWith('mouse_'))
          imgs.push( item );
        else
          data.push( item );
      } );
    }

    return(
      <li className={ `products-item ${ hover }` } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
        <div>
          { imgs? <img key={ uuid() } src={ `data:image/png;base64,${ hover==='hover'? imgs[1].fragImage: imgs[0].fragImage }` } alt="pic" style={{ width: '60xp', height: '60px'}} />: null }
          <p className={ `item-title ${ hover }` }>{ resName }</p>
          <hr/>
        </div>
        {
          data? data.map( ( item, index ) => {
            return(
              <div key={ uuid() } style={ hover==='hover'? { height: `${ 1 / ( data.length + 1 ) * 310 }px`, lineHeight: '100%'}: { height: `${ 1 / ( data.length + 1 ) * 150 }px`, lineHeight: '100%'} }>
                <Link to={{ pathname: `product/${item.fragUrl}`, query: item }} style={{ textDecoration: 'none' }}>
                  <p key={ uuid() } className={ `item-name ${ hover }` }> { item.fragTitle } </p>
                  { hover==='hover'? <p key={ uuid() } className="item-text"> { item.fragContent } </p>: null }
                </Link>
              </div>
            )
          } ): null
        }
      </li>
    );
  }
}

export default Product_Item;