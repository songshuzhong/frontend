import React, { Component } from 'react';
import { Row, Col, context } from 'epm-ui';
import { Link } from 'react-router-dom';
import uuid from '../../../utilities/uuid';
import { getDataSource } from '../../../utilities/dataSource';
import '../../../../styles/commons/products/products-details-navigation.less';
import ctx from '../../../config/context-config';

/**
 *author: wangxiang
 *desc: 产品详情-导航条
 *date: 2017/8/11
 */
class ProductDetailsNavigation extends Component {
    constructor( props ) {
        super( props );

        this.state={
            data: '',
            display: 'none'
        };

        this.handleClickNavItem = this.handleClickNavItem.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleClickNavItem(event) {
        const INDEX = event.target.getAttribute( 'data-index' );
        this.props.handleClickNav(INDEX);
    }

    componentDidMount() {
        if (this.props.listMenu){
            getDataSource(`${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/head_product/detail`,
                (data) => {this.setState({data: data})});
        }
    }

    handleMouseEnter(){
        this.setState( {display: 'block'} );
    }

    handleMouseLeave() {
        this.setState( {display: 'none'} );
    }

    render() {
        let itemsList = null;
        if (this.props.listMenu) {
            const { items } = this.state.data;
            const RESOURCE_LIST = items ? items[0].resourceList : '';
            itemsList = RESOURCE_LIST ? RESOURCE_LIST.items : null;
        }
        return (
            <div className="product details navigation" style={{display:this.props.display}}>
                <Row>
                {
                    this.props.listMenu ?
                        <Col size={{ normal: 1, small: 1, medium: 1, large: 1 }} >
                            <div className="product details navitem">
                                <img src={ `${ context.contextPath }/common_logout/u199.png` } alt="pic"  onMouseEnter={ this.handleMouseEnter } />
                            </div>
                        </Col> :null
                }
                {
                    this.props.data.map((item,index) => {
                        let display = 'none';
                        if (parseInt(this.props.switch) === index) {
                            display = 'block';
                        }
                        return(
                            <Col size={{ normal: 2, small: 4, medium: 3, large: 2 }} key={ uuid()} onClick={this.handleClickNavItem} >
                                <div className="product details navitem"  data-index={index} onClick={this.handleClickNavItem}>
                                    {item}
                                    <hr style={{ display: `${display}`}} />
                                </div>
                            </Col>
                        );
                    })
                }
                </Row>
                {
                    this.props.listMenu ?
                        <Row>
                            <Col size={{ normal: 20, small: 20, medium: 20, large: 20 }}>
                                <div className="menu" style={{ display: this.state.display}} onMouseLeave={ this.handleMouseLeave }>
                                    {
                                        itemsList ? itemsList.map( (item, index) => {

                                            return(
                                                <ul className="item-ul" key={ uuid() }>
                                                    <li className="title">{ item.resName }</li>
                                                    {
                                                        item.items ? item.items.map((item2, index) => {

                                                            return (
                                                                <li key={ uuid() }>
                                                                    <Link to={ `/product/${ item2.fragUrl }` }>{ item2.fragTitle }</Link>
                                                                </li>
                                                            );
                                                        }): null
                                                    }
                                                </ul>
                                            );
                                        }) : null
                                    }
                                </div>
                            </Col>
                        </Row>
                        :null
                }

            </div>
        );
    }
}

export default ProductDetailsNavigation ;