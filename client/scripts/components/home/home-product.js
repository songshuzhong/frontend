import React, { Component } from 'react';

import CommTitle from '../commons/comm-title';
import ProductsItem from './product-item';

import dataToState from '../get-data';
import uuid from '../../utilities/uuid';

import '../../../styles/home/home-products.less';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 通用导航栏
 */
class Home_Product extends Component {

  constructor( props ) {

    super( props );

    this.state = {
      data: {}
    }
  }

  componentDidMount() {

    dataToState( this );
  }

  render() {
    let title;
    const { chlCode, chlType, items } = this.state.data;

    if ( items ) {
      title = items[0].codeName;
    }

    return (
      <div className="index index-products main-wrapper">
        <CommTitle title={ title }/>
        <ul className="products-wrapper">
          {
            items? items[0].resourceList.items.map( ( item, index ) => {

              return (
                <ProductsItem key={ uuid() } dataSource={ item } />
              );
            } ): null
          }
        </ul>
      </div>
    );
  }
}

export default Home_Product;
