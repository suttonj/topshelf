import React from "react";

import request from 'superagent';

import Book from "../components/book.jsx";

export default class BookList extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  static fetchData (params) {
    return new Promise((resolve, reject) => { 
      request
       .get('http://localhost:8080/api/booklists/' + params.id)
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
    let person = data.person;
    let imagePath = "/dist/images/";

    let books = [];
    for (let book of data.books) {
      books.push(
        <div className="pure-u-1-4">
          <Book data={book} />
        </div>
      );
    }

    return (
      <div className="Detail">
        {data.error ? (
          <div>
            <h1 className="Heading Heading--alt">Person not found</h1>
            <div className="Content padBox">
              Person not found
            </div>
          </div>
        ) : (
          <div>{/*<div className="Content padBox">
              <img className="Avatar" key={person.id} src={data.books[0].image} />
              <div className="KVSet">
                <div className="KV">
                  <div className="KV__Key">Name</div>
                  <div className="KV__Value">{person}</div>
                </div>
                <div className="KV">
                  <div className="KV__Key">Description </div>
                  <div className="KV__Value">{data.description}</div>
                </div>
                <div className="KV">
                  <div className="KV__Key">Source URL</div>
                  <div className="KV__Value">{data.source}</div>
                </div>
              </div>
            </div>
          */}
            <div className="pure-g">
              { books }
            </div>

            <div className="PersonInfo">
              <div className="PersonInfo--name">
                {person}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  renderBooks() {
    for ( let book of data.books ) { }
  }
}

