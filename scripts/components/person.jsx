import React from "react";

import { Link } from 'react-router';

import Rating from "../components/rating.jsx";

export default class Person extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  componentWillMount() {
    console.log("[Person] will mount with server response: ", this.props.data);
  }

  render() {
    let data = this.props.data;
    console.log('rendering person: ');
    console.dir(data);
    return (
      <div className="book-panel">
        <Link
          to="booklist"
          params={{id: data.booklist}}
        >
          <img className="thumbnail pure-img-responsive" key={data._id} src={data.image} />
          <div className="book-title">
            <span className="small-title">{data.name}</span>
          </div>
        </Link>
      </div>
    );
  }
}

