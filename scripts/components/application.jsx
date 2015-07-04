import React from "react";
import addons from 'react/addons';
import { Link, RouteHandler } from 'react-router';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import request from 'superagent';
// import LandingPage from "../pages/landing/page";
// import BookList from "../components/booklist";
import AppNav from "../components/appnav.jsx";

class Application extends React.Component {

  constructor(props, context) {
    super(props);
    context.router;
  }

  renderPersons() {
    console.log('rendering persons');
    return this.props.data.app.map((person) => {
      let name = person.name;
      return (
        <li className="pure-menu-item" key={person.booklist}>
          <Link
            className="PersonList__Link"
            to="booklist"
            params={{id: person.booklist}}
          >
            {name}
          </Link>
        </li>
      );
    });
  }

  render() {
    // let header = (
    //   <div style={this.getStyles()} >
    //     topshelf
    //   </div>
    // );
    //let navItems = this.getNavItems();

    return (
      <div id="container">
        <div id="main">
          <div className="layout">

            <AppNav items={this.renderPersons()} />

            <ReactCSSTransitionGroup transitionName="slideIn">
              <RouteHandler {...this.props} />
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }

  static fetchData (params) {
    return new Promise((resolve, reject) => { 
      request
       .get('http://localhost:8080/api/persons')
       .set('Accept', 'application/json')
       .end((err, res) => {
          console.log('fetched data:')
          console.dir(res);
          err ? reject(err) : resolve(res.body);
       });
     });
  }
}

Application.contextTypes = {
  router: React.PropTypes.func
};

export default Application;
