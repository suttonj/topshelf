import React from "react";

import Rating from "./rating";

export default class BookItem extends React.Component {

  componentWillMount() {
    console.log("[Book] will mount with server response: ", this.props.book);
  }

  render() {
    let book = this.props.book;
    console.log('rendering book: ');
    console.dir(book);
    return (
      <div className="book-panel">
          <img className="thumbnail pure-img-responsive" key={book._id} src={book.image} />
          <Rating book={book} />
          <div className="book-title">
            <span className="small-title">{book.title}</span>
          </div>

          <div className="book-author">
            <span className="small-author">by {book.author}</span>
          </div>
          
      </div>
    );
  }
}

