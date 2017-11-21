import React, { Component } from 'react';

import { Home_Swiper as Docker_Banner } from '../../components/home/home-swiper';
import DockerDetails from '../../components/product/product-details-docker';
import Comm_Loading from "../../components/commons/comm-loading";
import Comm_Footer from '../../components/commons/comm-footer';

import { getDataSource } from '../../utilities/dataSource';


class ProductDocker extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            fragUrl: props.match.params,
            data: {}
        }
        this.lock = false;
    }

    componentDidMount() {

       /* const fragUrl = this.state.fragUrl.fragUrl;*/
        const fragUrl ='product_docker';

            getDataSource( `http://coptest.bonc.pro/mdocs/internet/v1/namespaces/cop-pangu/channels/${ fragUrl }/catagoryCodes`,
            ( data ) => { if(!this.lock){this.setState( {data: data} );console.log(data)} });
    }


   /* componentWillReceiveProps( nextProps ) {
        if ( nextProps.match.params !== this.props.match.params) {
            if(!this.lock){ this.setState( { fragUrl: nextProps.match.params } )};

            getDataSource( `${ ctx.contextPath }/internet/v1/namespaces/${ ctx.namespace }/channels/${ nextProps.match.params.fragUrl }/catagoryCodes`,
                ( data ) => {if(!this.lock){this.setState( {data: data} )}});
        }
    }*/

    render() {
        const { chlCode , items } = this.state.data;
        let overview = '';
        let swiper = '';
        let carousel = '';
        items ? items.map(( item, index )=>{
            const CODE_CLASS = item.codeClass;
            if (CODE_CLASS.indexOf("overview") !== -1) {
                overview = CODE_CLASS;
            }else if (CODE_CLASS.indexOf("swiper") !== -1) {
                swiper = CODE_CLASS;
            }else if (CODE_CLASS.indexOf("carousel") !== -1) {
                carousel = CODE_CLASS;
            }
        }): null

        return (
            items ?
                <div>
                    <Docker_Banner dataSource={ `http://coptest.bonc.pro/mdocs/internet/v1/namespaces/cop-pangu/channels/${ chlCode }/codes/${ swiper }/detail` } height={ 350 } titleSize="36px" contentSize="16px" showIndicators={ false } cycle={ false }  />
                    <DockerDetails  dataSource={ `http://coptest.bonc.pro/mdocs/internet/v1/namespaces/cop-pangu/channels/${ chlCode }/codes/${ overview }/doctrees/detail` } chlCode = { `${chlCode}` } carousel = { `${ carousel }` } />
                    <Comm_Footer dataSource={ `http://coptest.bonc.pro/mdocs/internet/v1/namespaces/cop-pangu/channels/page_footer/codes/footer_view/doctrees/detail` } />
                </div> : <div  style={{ height: 500 }}> <Comm_Loading type="bounce"/> </div>
        );
    }
}

export { ProductDocker };
export default ProductDocker;