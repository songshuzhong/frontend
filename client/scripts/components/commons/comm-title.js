import React, { Component } from 'react';

/**
 *author: wangxiang
 *desc: 产品详情-标题
 *date: 2017/8/5
 */
class CommonTitle extends Component {
    constructor( props ) {
        super( props );
        this.state = {
          title: props.title,
          titleSize: props.titleSize
        };
    }

  render() {
    let wrapper = { width: '100%', padding: '1% 3% 1% 3%', display: 'inline-block' };
    let text = { fontFamily: '微软雅黑 Regular 微软雅黑', fontWeight: 700, fontStyle: 'normal', fontSize: this.state.titleSize, color: '#666666', display: 'inline', paddingLeft: '0.625rem', verticalAlign: 'middle' };

    return(
      <div style={ wrapper }>
        <img src={ `/index_logout/u350_line.png` } style={{width: '3px', height: '25px'}}/>
        <p style={ text }> { this.props.title } </p>
      </div>
    );
  }
}

CommonTitle.defaultProps = {
  title: '',
  titleSize: "1.25rem"
};

export { CommonTitle };
export default CommonTitle ;