import React, { Component } from 'react';

import FeatureItem from './feature-item';
import { Comm_Loading } from '../commons/comm-loading';

import dataToState from '../get-data';

import '../../../styles/home/home-features.less';

class Home_Feature extends Component {
  
  constructor( props ) {
    super( props );
    
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    
    dataToState( this );
  }
  
  render() {
    const { chlCode, chlType, items } = this.state.data;
    return (
      <div className="index index-feature main-wrapper">
        <ul className="feature-list">
          {
            items? items[0].resourceList.items[0].items.map( ( item, index ) => (
              <FeatureItem key={ index } fragImage={ item.fragImage } fragTitle={ item.fragTitle } fragContent={ item.fragContent } />
            ) ): <Comm_Loading type="bounce"/>
          }
        </ul>
      </div>
    );
  }
}

export default Home_Feature;