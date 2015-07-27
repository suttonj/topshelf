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

  getTopics() {
    return [
      { 
        _id: 0,
        title: "Business", 
        people: [ 'Mark Cuban', 'Bill Gates', 'Elon Musk', 'Oprah Winfrey' ] 
      },
      { 
        _id: 1,
        title: "Technology", 
        people: [ 'Larry Page', 'Mark Zuckerberg', 'Steve Jobs', 'Bill Gates', 'Elon Musk' ] 
      },
      { 
        _id: 2,
        title: "Philanthropy", 
        people: [ 'Hilary Rodham Clinton', 'Bill Gates' ] 
      }
    ]
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

  renderTopics() {
    console.log('rendering topics');
    return this.props.data.app.map((topic) => {
      let title = topic.title;
      return (
        <li className="pure-menu-item" key={topic._id}>
          <Link
            className="PersonList__Link"
            to="topic"
            params={{id: topic._id}}
          >
            {title}
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

            <AppNav items={this.renderTopics()} />

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
       .get('http://localhost:8080/api/topics')
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
