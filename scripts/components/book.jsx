import React from "react";

import request from 'superagent';

export default class Book extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  componentWillMount() {
    console.log("[Book] will mount with server response: ", this.props.data);
  }

  render() {
    let data = this.props.data;
    console.log('rendering book: ');
    console.dir(data);
    return (
      <div className="book-panel">
          <img className="thumbnail pure-img-responsive" key={data._id} src={data.image} />
          <div className="book-title">
            <span className="small-title">{data.title}</span>
          </div>
          {/*<div className="book-description">
            <span className="small-description">{data.description}</div>
          </div>*/}
          <div className="book-author">
            <span className="small-author">{data.author}</span>
          </div>
          
      </div>
    );
  }
}

