import React, { Component } from 'react'

import { Line } from 'epm-ui';

import ctx from '../config/context-config';

class About extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
        <div>
          <Line dataSource={ `${ ctx.contextPath }/rest/line` }/>
        </div>
    )
  }
}

export { About };