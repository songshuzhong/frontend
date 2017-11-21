import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'epm-ui';

import uuid from '../../utilities/uuid';
import dataToState from '../get-data';
import { getDataSource } from '../../utilities/dataSource';

import '../../../styles/home/swiper.less';

class Home_Swiper extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
      titleSize: props.titleSize,
      contentSize: props.contentSize,
      height: props.height,
      cycle: props.cycle,
      showIndicators: props.showIndicators,
      data: [],
    };
  }
  
  componentDidMount() {

    dataToState( this );
  }

  componentWillReceiveProps( nextProps ) {
      if ( nextProps.dataSource !== this.props.dataSource ) {
          getDataSource( `${ nextProps.dataSource }`,
              ( data ) => {this.setState( {data: data} )});
      }
  }

  createSwiperButton( item ) {
    let buttons = [];
    for ( let i = 1; i < 4; i++ ) {
      if ( item[`fragExt${ i }Name`] !== "" && item[`fragExt${ i }Value`] !== "" ) {
        buttons.push(
          <Link key={ uuid() } to={ item[`fragExt${ i }Value`] }>
            <button className="button" key={ uuid() }>{ item[`fragExt${ i }Name`] }</button>
          </Link>
        );
      } else break;
    }
    return buttons;
  }

  render() {
    const { height, titleSize, contentSize, cycle, showIndicators, data: { chlCode, chlType, items } } = this.state;
    return (
    <Carousel height={ height } cycle={ cycle } showIndicators={ showIndicators } interval={ 4000 } speed={ 1000 }  effect='slide'>
      {
        items? items[0].resourceList.items[0].items.map( ( item, index ) => {
          return (
            <Carousel.Panel key={ uuid() }>
              <div className="swiper item item-wrapper" style={ { backgroundImage: `url('data:image/png;base64,${ item.fragImage }')`, height:{ height }, backgroundSize:'100% 100%' } }>
                <div className="content">
                  <h2 className="title" style={{ fontSize: titleSize }}>{ item.fragTitle }</h2>
                  <p className="text" style={{ fontSize: contentSize }}>{ item.fragContent }</p>
                  {
                    this.createSwiperButton( item )
                  }
                </div>
              </div>
            </Carousel.Panel>
          );
        } ): null
      }
    </Carousel>
    );
  }
}

Home_Swiper.defaultProps = {
  titleSize: '44px',
  contentSize: '20px',
  height: 450,
  cycle: true,
  showIndicators: true
};

export default Home_Swiper;
export { Home_Swiper };
