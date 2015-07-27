import React from "react";

import request from 'superagent';

import Person from "../components/person.jsx";

export default class Topic extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  constructor(props) {
    super(props);

  }

  static fetchData (params) {
    return new Promise((resolve, reject) => { 
      request
       .get('http://localhost:8080/api/topics/' + params.id)
       //.get('http://localhost:8080/api/persons')
       .set('Accept', 'application/json')
       .end((err, res) => {
          console.log('fetched data:')
          console.dir(res);
          err ? reject(err) : resolve(res.body);
       });
     });
  }

  componentWillMount() {
    console.log("[Topic] will mount with server response: ", this.props.data.topic);
  }

  render() {
    let data = this.props.data.topic;
    console.log('rendering topic: ');
    console.dir(data);

    let people = [];
    for (let person of data.people) {
      people.push(
        <div className="pure-u-1-4">
          <Person data={person} />
        </div>
      );
    }

    return (
      <div className="Detail">
        {data.error ? (
          <div>
            <h1 className="Heading Heading--alt">Topic not found</h1>
            <div className="Content padBox">
              Topic not found
            </div>
          </div>
        ) : (
          <div>
            <h1>{data.title}</h1>
            <div className="pure-g">
              { people }
            </div>
          </div>
        )}
      </div>
    );
  }
}

