import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Alert, Icon } from 'epm-ui';
import 'epm-ui-css/dist/css/epm-ui.css';

import ctx from '../config/context-config';

class Home extends Component {
  render() {
    return (
      <ul>
        <li><Link to={ `${ ctx.contextPath }/app` }>app</Link></li>
        <li><Link to={ `${ ctx.contextPath }/about` }>about<Icon type="apple" /></Link></li>
        <li><Link to={ `${ ctx.contextPath }/cop-home` }>cop-home</Link></li>
        { this.props.children }
      </ul>
    );
  }
}

export { Home };
export default Home;
