import React, {Component} from 'react';

import { getDataSource } from '../../utilities/dataSource';
import { clone } from '../../utilities/clone';

class CarouselLi extends Component {
    constructor() {
        super();
        this.state = ({
            data : []
        })
    }

    componentDidMount() {
        if ( this.props.dataSource ) {

            const dataSource = clone( this.props.dataSource );

            const saveDataSource = ( dataSource ) => {
                const data = dataSource ? dataSource : '';
                let ww = [];
                data.items.map((item,index) => {
                    let aa = item.resourceList.items;
                    if(aa) {
                        aa.map((item,index) => {
                            let bb = item.items;
                            if(bb) {
                                bb.map((item,index) => {
                                    ww.push(item);
                                });
                            }
                        })
                    }
                });
                this.setState(
                    {
                        data : ww
                    }
                );
            };
            getDataSource( dataSource, saveDataSource );

        }
    }

    render() {

        let liWidth = {
            width : this.props.liWidth
        };

        return(

            <ul className="index_carousel_list" id="oul" >
                {
                    this.state.data.map((item,index) => {
                        let url = "data:image/jpg;base64," + item.fragImage;
                        return (
                            <li key={index} style={liWidth}>
                                <img src={url} style={{width:150,height:100}}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default CarouselLi;