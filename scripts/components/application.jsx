import React from "react";
import addons from 'react/addons';
import { Link, RouteHandler } from 'react-router';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// import { getData } from "../common/request";
import request from 'superagent';
// import LandingPage from "../pages/landing/page";
// import BookList from "../components/booklist";


export default class Application extends React.Component {

  renderPersons() {
    console.log('rendering persons');
    return this.props.data.app.contacts.map((person) => {
      return (
        <li className="PersonList__Person" key={person.id}>
          <Link
            className="PersonList__Link"
            to="booklist"
            params={{id: person.id}}
          >
            {person.first} {person.last}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div id="container">
        <div id="main">
          <div className="App">
            <div className="TopBar">
              Reading Lists of Influential People
            </div>
            <div className="Master">
              <h2 className="Heading">Reading Lists</h2>
              <div className="Content">
                <ul className="PersonList">
                  {this.renderPersons()}
                </ul>
              </div>
            </div>

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
       .get('http://addressbook-api.herokuapp.com/contacts')
       .set('Accept', 'application/json')
       .end((err, res) => {
          console.log('fetched data:')
          console.dir(res);
          err ? reject(err) : resolve(res.body);
       });
     });
  }
}
