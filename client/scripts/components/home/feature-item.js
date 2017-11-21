import React, { Component } from 'react';

class FeatureItem extends Component {
  constructor( props ) {
    super( props );
    
    this.state = {
      show: 'hidden'
    }
    
    this.handleMouseEnter = this.handleMouseEnter.bind( this );
    this.handleMouseLeave = this.handleMouseLeave.bind( this );
  }
  
  handleMouseEnter(){
    this.setState( { show: 'show' } );
  }
  
  handleMouseLeave() {
    this.setState( { show: 'hidden' } );
  }
  
  render(){
    return(
      <li className={ `feature-item ${ this.state.show }` } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
        <div className="top">
          <img className='pic' src={ `data:image/jpg;base64,${ this.props.fragImage }` } alt="pic" />
          <p className="title">{ this.props.fragTitle }</p>
        </div>
        <p className="text" dangerouslySetInnerHTML={ { __html: this.props.fragContent } } />
      </li>
    );
  }
}

export default FeatureItem;