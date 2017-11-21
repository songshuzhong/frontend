import React, { Component } from 'react';

import dataToState from '../get-data';

import '../../../styles/commons/comm-footer.less';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 通用footer
 */
class Comm_Footer extends Component {
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
    const { data } = this.state;

    let items = data.items;
    let child = null;
    items ? items.map((item, index) => {
        let items = item.treeList.items;
        items ? items.map((item, index) => {
          child = item.children;
        }) : null
    }) : null;
    return(
        <div className="footer-wrapper" style={{ backgroundColor: `black` }}>
            {
                child ? child.map((item , index) => {
                    let htmlDoc = item.docsDoc.docsDocContent.docHtmlContent;
                    return (
                        <div key={ index } className="footer-item">
                          <p style={{ fontSize: '16px', fontWeight: 600 }}>{ item.treeTitle}</p>
                          <p dangerouslySetInnerHTML={{__html: htmlDoc}} className="footer-p"/>
                        </div>
                    )
                }) : null
            }
            <span className="footer-bottom-content">2017能力开放平台-京ICP备xxxxxxxxx号</span>
        </div>
    );
  }
}

export { Comm_Footer };
export default Comm_Footer;

