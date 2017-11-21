import React from 'react' ;
import { Route } from 'react-router-dom';
import { App } from '../pages/app';
import { About } from '../pages/about' ;
import { Home } from '../pages/home' ;
import { HomePage } from '../pages/cop';
import ProductDocker from '../pages/product/product-docker';

import ctx from './context-config';

export default () => (
  <div>
    <Route path={ `${ ctx.contextPath }/`} component={ Home }/>
    <Route path={ `${ ctx.contextPath }/app` } component={ App }/>
    <Route path={ `${ ctx.contextPath }/about` } component={ About }/>
    <Route path={ `${ ctx.contextPath }/cop-home` } component={ HomePage }/>
    <Route path={ `${ ctx.contextPath }/product` } component={ ProductDocker }/>
  </div>
);
