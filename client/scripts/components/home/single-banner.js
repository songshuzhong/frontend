import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Comm_Loading } from '../commons/comm-loading';

import dataToState from '../get-data';

import '../../../styles/home/single-banner.less';

class SingleBanner extends Component {
  
  constructor( props ) {
    
    super( props );
    
    this.state = {
      data: {},
      backgroundSize: props.backgroundSize,
      height: props.height
    }
  }
  
  componentDidMount() {
    
    dataToState( this );
  }
  
  render() {
    const { height, backgroundSize, data: { chlCode, chlType, items } } = this.state;

    return (
      <div className="banners main-wrapper">
        {
          items? items[0].resourceList.items[0].items.map( ( item, index ) => {
            let float = (index + 1)%2 === 0? 'right': 'left';
            let btn_float = "";
            if(float === 'right') {
                btn_float = "btn_right";
            } else if(float === 'left'){
                btn_float = "btn_left";
            }

            return (
              <div key={ index } className={ `banner-wrapper ${ item.type || 'default' }` } style={ { backgroundSize: backgroundSize, backgroundRepeat: 'no-repeat', backgroundImage: `url('data:image/png;base64,${ item.fragImage }')` } }>
                <div className={ `content-wrapper ${float}` }>
                  <h2 className={ `title` } style={{ color: `${ (index + 1)%2 === 0? 'white': ''}` }}>{ item.fragTitle }</h2>
                  <p className={ `text` } style={{ color: `${ (index + 1)%2 === 0? 'white': ''}` }}>{ item.fragContent }</p>
                  <Link className="link" to={{ pathname: item.fragExt1Value, query: item }}>
                    {
                      item.fragExt1Name? <button className={` button ${btn_float}`}>{ item.fragExt1Name }</button>: null
                    }
                  </Link>
                  <Link className="link" to={{ pathname: item.fragExt2Value, query: item }}>
                    {

                        chlCode === "data_mine" ? ((item.fragExt1Value.indexOf("algorithm_model") < 0) ? (<button className={` button ${btn_float}`}>{ item.fragExt2Name }</button>) : null) : null
                    }
                  </Link>
                </div>
              </div>
            );
          } ): <Comm_Loading type="bounce"/>
        }
      </div>
    );
  }
}

SingleBanner.defaultProps = {
  height: '250px',
  backgroundSize: 'contain'
};

export { SingleBanner };
export default SingleBanner;
