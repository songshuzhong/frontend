import React, { Component } from 'react';

import CommTitle from '../commons/comm-title';

import dataToState from '../get-data';

import '../../../styles/home/home-advantage.less';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc
 */
class Home_Advantage extends Component {

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
    let title;
    const { chlCode, chlType, items } = this.state.data;

    if ( items ) {
      title = items[0].codeName;
    }
    return (
      <div className="index index-advantage main-wrapper">
        <CommTitle title={ title }/>
        {
          items? items[0].resourceList.items[0].items.map( ( item, index ) => {

            return (
              <div key={ index } className="advantage-item">
                <img key={ index } src={ `data:image/jpg;base64,${ item.fragImage }` } style={{width: '60px', height: '50px'}}/>
                <p>{ item.fragTitle }</p>
                <p>{ item.fragContent }</p>
              </div>
            );
          } ): null
        }
      </div>
    );
  }
}

export default Home_Advantage;
