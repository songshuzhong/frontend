import React, { Component } from 'react';

import Home_Feature from '../components/home/home-feature';
import { SingleBanner as Home_Banner } from '../components/home/single-banner';
import Home_Product from '../components/home/home-product';
import Home_Advantage from '../components/home/home-advantage';
import Comm_Footer from '../components/commons/comm-footer';

import ctx from '../config/context-config';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 首页
 */
class HomePage extends Component {
  constructor( props ) {
    super( props );

    this.state = { dataSource: {}};
  }

  render() {
    return (
      <div style={{ width: '100%'}}>
        <Home_Feature dataSource={ `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/home/codes/home_feature/detail` } />
        <Home_Banner dataSource={ `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/home/codes/home_banner/detail` } backgroundSize="cover"/>
        <Home_Product dataSource={ `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/home/codes/home_product/detail` } />
        <Home_Advantage dataSource={ `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/home/codes/home_advantage/detail` } />
        <Comm_Footer dataSource={ `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/page_footer/codes/footer_view/doctrees/detail` } />
      </div>
    );
  }
}

export { HomePage };
export default HomePage;