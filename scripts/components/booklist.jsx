import React from "react";

import request from 'superagent';

export default class BookList extends React.Component {

  static fetchData (params) {
    return new Promise((resolve, reject) => { 
      request
       .get('http://addressbook-api.herokuapp.com/contacts/' + params.id)
       .set('Accept', 'application/json')
       .end((err, res) => {
          console.log('fetched data:')
          console.dir(res);
          err ? reject(err) : resolve(res.body);
       });
     });
  }

  componentWillMount() {
    console.log("[BookList] will mount with server response: ", this.props.data.booklist);
  }

  render() {
    let data = this.props.data.booklist;
    console.log('rendering booklist: ');
    console.dir(data);
    let person = data.contact;
    return (
      <div className="Detail">
        <div className="Person">
          {data.error ? (
            <div>
              <h1 className="Heading Heading--alt">Person not found</h1>
              <div className="Content padBox">
                Person not found
              </div>
            </div>
          ): (
            <div>
              <h1 className="Heading Heading--alt">{person.first} {person.last}</h1>
              <div className="Content padBox">
                <img className="Avatar" key={person.id} src={person.avatar}/>
                <div className="KVSet">
                  <div className="KV">
                    <div className="KV__Key">First Name</div>
                    <div className="KV__Value">{person.first}</div>
                  </div>
                  <div className="KV">
                    <div className="KV__Key">Last Name</div>
                    <div className="KV__Value">{person.last}</div>
                  </div>
                  <div className="KV">
                    <div className="KV__Key">Avatar URL</div>
                    <div className="KV__Value">{person.avatar}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

