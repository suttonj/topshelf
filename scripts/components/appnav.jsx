import React from "react";
import addons from 'react/addons';
import Router from 'react-router';

//import request from 'superagent';

class AppNav extends React.Component {
	constructor() {
    super();
	}

	// static fetchData (params) {
 //    return new Promise((resolve, reject) => { 
 //      request
 //       .get('http://addressbook-api.herokuapp.com/contacts')
 //       .set('Accept', 'application/json')
 //       .end((err, res) => {
 //          console.log('fetched data:')
 //          console.dir(res);
 //          err ? reject(err) : resolve(res.body);
 //       });
 //     });
 //  }

  render() {

    return (
      <div className="menu">
        <h2 className="pure-menu-heading">Reading Lists</h2>
        <div className="pure-menu">
          <ul className="pure-menu-list">
            {this.props.items}
          </ul>
        </div>
      </div>
    );
  }
}

AppNav.contextTypes = {
	router: React.PropTypes.func
};

export default AppNav;