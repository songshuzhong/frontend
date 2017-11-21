import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CarouselLi from '../login/carouselLi';

import '../../../styles/commons/comm-carousel.less';

/**
 *@author renxuanwei
 *@Date 2017/08/25
 *@desc 轮播图
 */
class Comm_Carousel extends Component  {
    constructor() {
        super();
        this.state = ({
            lis : {}
        })
    }

    //需要配置的参数有  1.显示几个图片 2.图片的左边距(设置margin-left) 3.li的宽度
    componentDidMount() {
        let imgcount = this.props.imagesCount;
        let leftMar = this.props.leftMargin;
        let liWidth = this.props.liWidth;

        let oUl = document.getElementById("oul");

        if(oUl) {
            setTimeout( () => {
                let aLi = oUl.childNodes;
                let now = -imgcount * (aLi[0].offsetWidth + leftMar);

                oUl.style.width = aLi.length * (aLi[0].offsetWidth + leftMar) + 'px';

                let timer = setInterval(() => {
                    let n = Math.floor((aLi.length * (aLi[0].offsetWidth + 13) + oUl.offsetLeft) / aLi[0].offsetWidth);
                    if (n <= imgcount) {
                        this.moveAbove(oUl, 'left', 0);
                    }
                    else {
                        this.moveAbove(oUl, 'left', oUl.offsetLeft + now);
                    }
                }, 3000);

                oUl.onmouseover = (() => {
                    clearInterval(timer);
                });
                oUl.onmouseout = (() => {
                    timer = setInterval(() => {
                        let n = Math.floor((aLi.length * (aLi[0].offsetWidth + 13) + oUl.offsetLeft) / aLi[0].offsetWidth);
                        if (n <= imgcount) {
                            this.moveAbove(oUl, 'left', 0);
                        }
                        else {
                            this.moveAbove(oUl, 'left', oUl.offsetLeft + now);
                        }
                    }, 3000);
                })
            },2000);
        }
    }

    moveAbove(obj, attr, iTarget) { //参数依次为 需要偏移的对象Ul,attr为属性left(一直在算左侧偏移量)，偏移量
        clearInterval(obj.timer);
        obj.timer = setInterval(() => {
            let cur = 0;
            if (attr === 'opacity') {
                cur = Math.round(parseFloat(this.getStyle(obj, attr)) * 100);
            }
            else {
                cur = parseInt(this.getStyle(obj, attr)); //cur保存当前偏移量（及left属性的值）
            }
            let speed = (iTarget - cur) / 6;//
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (iTarget === cur) { //如果当前的偏移量等于将要偏移的距离，那么就停止循环任务
                clearInterval(obj.timer);
            }
            else if (attr === 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            }
            else {
                obj.style[attr] = cur + speed + 'px'; //每0.03秒向左偏移的距离
            }
        }, 30);
    }

    getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        }
        else {
            return getComputedStyle(obj, false)[name];
        }
    }
    handleLiChange(obj) {
        this.setState({lis:obj})
    }


    render () {

        let wid = {
            width:((this.props.liWidth + this.props.leftMargin) * this.props.imagesCount)
        };

        return(
            <div className="index_carousel_body" style={wid}>
                    <CarouselLi dataSource={this.props.dataSource} liWidth={this.props.liWidth}/>
            </div>
        )
    }
}
Comm_Carousel.propTypes = {
    imagesCount : PropTypes.number.isRequired,
    leftMargin : PropTypes.number.isRequired,
    liWidth : PropTypes.number.isRequired
};
export { Comm_Carousel };
export default Comm_Carousel;