import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col , context} from 'epm-ui';

import uuid from '../../utilities/uuid';
import { getDataSource } from '../../utilities/dataSource';
import { getOffsetLeft, getOffsetTop } from '../../utilities/dom';

import CommonTitle from '../commons/comm-title';
import ProductDetailsNavigation from '../commons/products/products-details-navigation';
import Comm_Carousel from '../commons/comm-carousel';

import ctx from '../../config/context-config';
import '../../../styles/products/product-docker.less';
/**
 *author: wangxiang
 *desc: 产品详情组件（容器服务）
 *date: 2017/8/5
 */
class DockerDetails extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            data: [],
            switch: 0,
            nav_switch: 0,
            tab_switch: 0,
            show_nav: 'none',
            desc: '',
            explain: '',
            features: '',
            scenes: '',
            client: '',
            docs: ''
        };
        this.lock = false;
        this.handleLineShow = this.handleLineShow.bind( this );
        this.handleClickItemTitle = this.handleClickItemTitle.bind(this);
        this.handleClickTabItem = this.handleClickTabItem.bind(this);
        this.handleClickNav = this.handleClickNav.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
    }

    /*在初始化render之后只执行一次，在这个方法内，可以访问任何组件，componentDidMount()方法中的子组件在父组件之前执行
      从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求*/
    componentDidMount() {

        getDataSource( `${ this.props.dataSource }`,
            ( data ) => { if(!this.lock){this.setState( {data: data} )} });

        window.addEventListener('scroll', this.handleOnScroll);
    }

    //已加载组件收到新的参数时调用
    componentWillReceiveProps( nextProps ) {
        if ( nextProps.dataSource !== this.props.dataSource ) {
            getDataSource( `${ nextProps.dataSource }`,
                ( data ) => {if(!this.lock){this.setState( {data: data} )}});

            if(!this.lock) {
                this.setState({
                    switch: 0,
                    nav_switch: 0,
                    tab_switch: 0
                })
            }
        }
    }

    //执行一次，在初始化render之前执行，如果在这个方法内调用setState，render()知道state发生变化，并且只执行一次
    componentWillMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    }

    //当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
    componentWillUnmount() {
        this.lock = true;
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    /*features(产品功能)相关方法*/
    handleLineShow(index,length) {
        let marginTop = '32px';

        //当产品功能左菜单选项超过三项时
        if (length > 3){
            marginTop = '10px';
        }

        if (index <  this.state.features.children.length - 1){
            return <img src={ `/product_logout/docker/u118_line.png` } alt="pic"  style={{marginTop: `${marginTop}`}} />
        }
    }

    handleClickItemTitle(event){
        //event.persist();
        const SWITCH_INDEX = event.target.getAttribute( 'data-index' );
        this.setState({switch:SWITCH_INDEX});
    }

    /*scenes相关方法*/
    handleClickTabItem(event){
        const SWITCH_INDEX = event.target.getAttribute( 'data-index' );
        this.setState({tab_switch:SWITCH_INDEX});
    }

    handleOnScroll() {

        //获取每个模块的div高度
        const MAIN_TITLE_DIV = document.getElementById("main-title-div");
        const MAIN_TITLE_DIV_HEIGHT = MAIN_TITLE_DIV.offsetHeight;
        const DESC_DIV = document.getElementById("desc-div");
        const DESC_DIV_HEIGHT = DESC_DIV.offsetHeight;
        const EXPLAIN_DIV = document.getElementById("explain-div");
        const EXPLAIN_DIV_HEIGHT = EXPLAIN_DIV.offsetHeight;
        const FEATURES_DIV = document.getElementById("features-div");
        const FEATURES_DIV_HEIGHT = FEATURES_DIV.offsetHeight;
        const SCENES_DIV = document.getElementById("scenes-div");
        const SCENES_DIV_HEIGHT = SCENES_DIV.offsetHeight;
        const CLIENT_DIV = document.getElementById("client-div");
        const CLIENT_DIV_HEIGHT = CLIENT_DIV.offsetHeight;
        const DOCS_DIV = document.getElementById("docs-div");
       // const DOCS_DIV_HEIGHT = DOCS_DIV.offsetHeight;

        const FIRST_OBJ = 364 + MAIN_TITLE_DIV_HEIGHT;
        const SECOND_OBJ = FIRST_OBJ + DESC_DIV_HEIGHT;
        const THRID_OBJ = SECOND_OBJ + EXPLAIN_DIV_HEIGHT;
        const FOURTH_OBJ = THRID_OBJ + FEATURES_DIV_HEIGHT;
        const FIFTH_OBJ = FOURTH_OBJ + SCENES_DIV_HEIGHT;
        const SIXTH_OBJ = FIFTH_OBJ + CLIENT_DIV_HEIGHT;
       // const SEVEN_OBJ = STXTH_OBJ + DOCS_DIV_HEIGHT;

        const SCROLL = window.scrollY;
        const SHOW_NAV = this.state.show_nav;

        if(SCROLL >= 364) {
            if (SHOW_NAV !== 'block'){
                this.setState({show_nav:'block'});
            }
        }else {
            if (SHOW_NAV !== 'none'){
                this.setState({show_nav:'none'});
            }
        }

        const SWITCH_NAV = parseInt(this.state.nav_switch);
        if (SCROLL >= FIRST_OBJ && SCROLL < SECOND_OBJ){
            if(SWITCH_NAV !== 0){
                this.setState({nav_switch:0});
            }
        }else if(SCROLL >= SECOND_OBJ && SCROLL < THRID_OBJ) {
            if(SWITCH_NAV !== 1){
                this.setState({nav_switch:1});
            }
        }else if(SCROLL >= THRID_OBJ && SCROLL < FOURTH_OBJ){
            if(SWITCH_NAV !== 2){
                this.setState({nav_switch:2});
            }
        }else if(SCROLL >= FOURTH_OBJ && SCROLL < FIFTH_OBJ){
            if(SWITCH_NAV !== 3){
                this.setState({nav_switch:3});
            }
        }else if(SCROLL >= FIFTH_OBJ && SCROLL < SIXTH_OBJ){
            if(SWITCH_NAV !== 4){
                this.setState({nav_switch:4});
            }
        }else if(SCROLL >= SIXTH_OBJ){
            if(SWITCH_NAV !== 5){
                this.setState({nav_switch:5});
            }
        }
    }


    handleClickNav(index) {
        const DOM = document.getElementById("navscroll"+index);
        DOM.scrollIntoView(true);
        window.scrollTo( getOffsetLeft( DOM ), getOffsetTop( DOM ) - 60 );
    }

    render() {
        let descDocsDoc = '';
        let explainDocsDoc = '';
        const { chlCode, chlDesc, chlId, chlName, chlType, items } = this.state.data;
        const TREE_LIST  = items ? items[0].treeList : {};
        const MAIN_TITLE= TREE_LIST.items ? TREE_LIST.items[0].treeTitle : null;//总标题
        const CHILDREN = TREE_LIST.items ? TREE_LIST.items[0].children : null;
        const CHILDREN_ITEMS = CHILDREN ?
            CHILDREN.map((item,index) => {
            if (index === 0){
                this.state.desc = item;
                descDocsDoc = item.docsDoc;
            }else if(index === 1){
                this.state.explain = item;
                explainDocsDoc = item.docsDoc;
            }else if(index === 2){
                this.state.features = item;
            }else if(index === 3){
                this.state.scenes = item;
            }else if(index === 4){
                this.state.client = item;
            }else if(index === 5){
                this.state.docs = item;
            }
            }) : null;

        let titles = [];
        titles.push(this.state.desc.treeTitle,this.state.explain.treeTitle,this.state.features.treeTitle,this.state.scenes.treeTitle,this.state.client.treeTitle,this.state.docs.treeTitle);

        let leftWidth = 5;
        if (chlCode === 'product_mysql'){
            leftWidth = 7;
        }
        let rightWidth = 24-1-leftWidth;
        return (
            <div>
            <ProductDetailsNavigation data={titles} switch={this.state.nav_switch} handleClickNav={this.handleClickNav} display={this.state.show_nav} />
            <div className="product docker main-body" id="main-body" style={{marginTop: 25,width:'98.8%'}}>
                <div id="main-title-div">
                    <Row id="myInput1">
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker main-title"><span>{MAIN_TITLE}</span></div>
                        </Col>
                    </Row>
                </div>

                <div id="desc-div">
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker desc" id="navscroll0">
                                <CommonTitle titleSize="16px" title={this.state.desc.treeTitle}/>
                                <div className="product docker desc-text"
                                     dangerouslySetInnerHTML={{ __html : descDocsDoc.docsDocContent ? descDocsDoc.docsDocContent.docHtmlContent : '' }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="explain-div">
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker explain" id="navscroll1">
                                <CommonTitle titleSize="16px" title={this.state.explain.treeTitle}/>
                                <div className="product docker explain-text"
                                     dangerouslySetInnerHTML={{ __html : explainDocsDoc.docsDocContent ? explainDocsDoc.docsDocContent.docHtmlContent : '' }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="features-div">
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker features" id="navscroll2">
                                <CommonTitle titleSize="16px" title={this.state.features.treeTitle}/>
                                <Row>
                                    <Col size={{ normal: 16, small: 16, medium: 16, large: 16 }} offset={ 3 }>
                                        <div className="product docker array-table">
                                            <Row>
                                                <Col size={{ normal: leftWidth, small: leftWidth, medium: leftWidth, large: leftWidth }} style={{ height: 270 }} >
                                                    <div className="product docker left-menu" style={{ height: '100%' }}>
                                                        {
                                                            this.state.features.children ? this.state.features.children.map((item,index) => {

                                                                let active = '';
                                                                if (index === parseInt( this.state.switch )) {
                                                                    active = 'active';
                                                                }
                                                                const docsDocContent = item.docsDoc ? item.docsDoc.docsDocContent : '';

                                                                const FEATURES_CHILDREN_LENGTH = this.state.features.children.length;
                                                                let padding = '20px 0';
                                                                if (FEATURES_CHILDREN_LENGTH > 3){
                                                                    padding = '5px 0';
                                                                }else if(FEATURES_CHILDREN_LENGTH === 2) {
                                                                    padding = '50px 0';
                                                                }
                                                                return(
                                                                    <div className="product docker left-menu-item"
                                                                         key={ uuid() }
                                                                         style={{padding:`${padding}`, borderBottom: index <  FEATURES_CHILDREN_LENGTH - 1 ? 'solid 1px #ccc' : null, height: `${ 100/FEATURES_CHILDREN_LENGTH }%` }}
                                                                         >
                                                                        <div className="product docker left-menu-item-title">
                                                                            <span className={ `font ${ active }` }
                                                                                  data-index={ index }
                                                                                  onClick={this.handleClickItemTitle}>{docsDocContent ? docsDocContent.docTitle : ''}</span>
                                                                            <img src={ `/product_logout/docker/u65.png` } />
                                                                        </div>
                                                                        {/*{this.handleLineShow(index,FEATURES_CHILDREN_LENGTH)}*/}
                                                                    </div>
                                                                );
                                                            }): null
                                                        }
                                                    </div>
                                                </Col>
                                                <Col size={{ normal: 1, small: 1, medium: 1, large: 1 }} >
                                                    <div className="product docker middle-line"><img src={ `/product_logout/docker/u114_line.png` } alt="pic" /></div>
                                                </Col>
                                                <Col size={{ normal: rightWidth, small: rightWidth, medium: rightWidth, large: rightWidth }} style={{ height: 270 }} >
                                                    <div className="product docker right-content">
                                                        {
                                                            this.state.features.children ? this.state.features.children.map((item,index) => {

                                                                let display = 'none';
                                                                if (index === parseInt( this.state.switch )) {
                                                                    display = 'block';
                                                                }
                                                                const DOCS_DOC_CONTENT = item.docsDoc ? item.docsDoc.docsDocContent : '';
                                                                return(
                                                                    <ul key={ uuid() } style={{display:`${ display }`}} dangerouslySetInnerHTML={{__html: DOCS_DOC_CONTENT.docHtmlContent}}>
                                                                    </ul>
                                                                );
                                                            }): null
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="scenes-div" >
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker scenes" id="navscroll3">
                                <CommonTitle titleSize="16px" title={this.state.scenes.treeTitle} />
                                <Row>
                                    <Col size={{ normal: 16, small: 16, medium: 16, large: 16 }} offset={ 3 }>
                                        <div className="product docker scenes-tabs">
                                            <Row>
                                                <Col size={ 24 }>
                                                    <div className="product docker top-tabs">
                                                        {
                                                            this.state.scenes.children ? this.state.scenes.children.map( (item, index) => {

                                                                let classname = '';

                                                                if (index === parseInt(this.state.tab_switch)){
                                                                    classname = 'switch';
                                                                }

                                                                const docsDocContent = item.docsDoc ? item.docsDoc.docsDocContent : '';

                                                                const SCENES_CHILDREN_LENGTH = this.state.scenes.children.length;

                                                                const WIDTH =  100/SCENES_CHILDREN_LENGTH;

                                                                return <div data-index={index}
                                                                            key={ uuid() }
                                                                            className={ `tab-item ${classname} index${SCENES_CHILDREN_LENGTH}${index}`}
                                                                            style={{width:`${WIDTH}%`}}
                                                                            onClick={this.handleClickTabItem}>{docsDocContent ? docsDocContent.docTitle : ''}</div>
                                                            }): null
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size={ 24 }>
                                                    <div className="product docker bottom-content">
                                                        {
                                                            this.state.scenes.children ? this.state.scenes.children.map((item,index) => {
                                                                let display = 'none';
                                                                if (index === parseInt( this.state.tab_switch )) {
                                                                    display = 'block';
                                                                }

                                                                const docsDocContent = item.docsDoc ? item.docsDoc.docsDocContent : '';

                                                                return(
                                                                    <div key={ uuid() } style={{display:`${ display }`}} dangerouslySetInnerHTML={{__html: docsDocContent.docHtmlContent}}>
                                                                    </div>
                                                                );
                                                            }) : null
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="client-div" >
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker client" id="navscroll4">
                                <CommonTitle titleSize="16px" title={this.state.client.treeTitle}/>
                                <Row>
                                    <Col size={{ normal: 20, small: 20, medium: 20, large: 20 }} offset={ 2 }>
                                        <div style={{height:120,border:'1px #DCDCDC solid',margin:'40px 0 40px 0',padding:10}}>
                                            {
                                                this.props.chlCode ?
                                                    <Comm_Carousel dataSource={`${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/${this.props.chlCode }/codes/${ this.props.carousel }/detail`} imagesCount={5} leftMargin={45} liWidth={150}/>
                                                    : null
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="docs-div" >
                    <Row>
                        <Col size={{ normal: 22, small: 22, medium: 22, large: 22 }} offset={ 1 }>
                            <div className="product docker docs" id="navscroll5">
                                <CommonTitle titleSize="16px" title={this.state.docs.treeTitle}/>
                                <Row>
                                    <Col size={22} offset={ 2 }>
                                        <div className="product docker docs-content">
                                            <Row>
                                                {
                                                    this.state.docs.children ? this.state.docs.children.map((item) => {
                                                        const itemDocsDocContent = item.docsDoc ? item.docsDoc.docsDocContent : null;
                                                        return(
                                                            <Col size={{ normal: 4, small: 12, medium: 6, large: 5 }} key={uuid()}>
                                                                <div className="product docker docs-content-item">
                                                                    <p>{itemDocsDocContent ? itemDocsDocContent.docTitle : ''}</p>
                                                                    {/*<Link to={item.treeDocUrl}>{itemDocsDocContent ? itemDocsDocContent.docTxtContent : ''}</Link>*/}
                                                                    <span className="content-span" dangerouslySetInnerHTML={{__html: itemDocsDocContent ? itemDocsDocContent.docHtmlContent : ''}}></span>
                                                                </div>
                                                            </Col>
                                                        );
                                                    }):null
                                                }
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        );
    }
}

export default DockerDetails;
export { DockerDetails };
