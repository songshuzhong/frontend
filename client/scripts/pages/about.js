import React, { Component } from 'react';

import { Line, Alert } from 'epm-ui';

import ctx from '../config/context-config';

/**
 * About
 */
class About extends Component {

  /**
   * render
   */
  render() {

    return (
      <div>
        <Alert message="这是个 Alert" />
        <Line dataSource={ `${ ctx.contextPath }/rest/line` } />
      </div>
    );
  }
}

export { About };
export default About;
