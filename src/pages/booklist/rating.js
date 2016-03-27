import React from "react";

export default class Rating extends React.Component {
  
  componentWillMount() {
    console.log("[Rating] will mount with server response: ", this.props.book);
  }

  render() {
    let book = this.props.book;
    console.log('rendering rating: ');
    console.dir(book);
    return (
      <div className="rating">
        <a className="badge" href={book.reflink} title="Goodreads Rating">
          <img src="/dist/images/goodreads-icon.png" />
          <br />
          <span>{book.goodreads_rating}</span>
        </a>
        <a className="badge" href={book.reflink} title="Amazon Rating">
          <img src="/dist/images/amazon-icon.gif" />
          <br />
          <span>{book.amazon_rating}</span>
        </a>
      </div>
    );
  }
}

