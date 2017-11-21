import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/commons/comm-loading.less';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 通用加载动画
 */
class Comm_Loading extends Component {

  renderItem( type ) {
    let loading = '';
    switch ( type ) {
      case 'rect': loading =
        <div className="datouwang1">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>;
        break;
      case 'reversal': loading =
        <div className="datouwang2" />;
        break;
      case 'double-bounce1': loading =
        <div className="datouwang3">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>;
        break;
      case 'cube': loading =
        <div className="datouwang4">
          <div className="cube1" />
          <div className="cube2" />
        </div>;
        break;
      case 'dot': loading =
        <div className="datouwang5">
          <div className="dot1" />
          <div className="dot2" />
        </div>;
          break;
      case 'bounce': loading =
        <div className="datouwang6">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>;
      break;
      default: loading =
        <div className="datouwang2" />;
    }
    return loading;
  }

  render() {
    const { type } = this.props;
    return (
      <div>
        {
          this.renderItem( type )
        }
      </div>
    );
  }
}

Comm_Loading.propTypes = {
  type: PropTypes.oneOf( [ 'rect', 'reversal', 'double-bounce1', 'cube', 'dot', 'bounce' ] )
};

export { Comm_Loading };
export default Comm_Loading;