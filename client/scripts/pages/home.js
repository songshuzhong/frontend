import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Home
 */
class Home extends Component {

  /**
   *
   * @returns {XML}
   */
  render() {
    return (
      <ul>
        <li><Link to={ `/app` }>app</Link></li>
        <li><Link to={ `/about` }>about</Link></li>
        <li><Link to={ `/cop-home` }>cop-home</Link></li>
        { this.props.children }
      </ul>
    );
  }
}

export { Home };
export default Home;
