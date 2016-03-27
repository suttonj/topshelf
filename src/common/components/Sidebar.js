import React from "react";
import Router from 'react-router';

import "../sidebar.css";

class Sidebar extends React.Component {
	constructor() {
    super();
	}

  render() {

    return (
      <div id="menu">
      	<div className="menu-header pure-menu-heading">
        	<h2 className="topleft-logo">TS</h2>
        </div>
        <div className="menu-content pure-menu">
        	<span className="menu-label">BROWSE</span>
          <ul className="pure-menu-list menu-items">
            {this.props.items}
          </ul>
        </div>
      </div>
    );
  }
}

// Sidebar.contextTypes = {
// 	router: React.PropTypes.func
// };

export default Sidebar;