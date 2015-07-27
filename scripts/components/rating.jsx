import React from "react";

export default class Rating extends React.Component {

  contextTypes: {
    router: React.PropTypes.func
  }

  componentWillMount() {
    console.log("[Rating] will mount with server response: ", this.props.data);
  }

  render() {
    let data = this.props.data;
    console.log('rendering rating: ');
    console.dir(data);
    return (
      <div className="rating">
        <a className="badge" href={data.reflink} title="Goodreads Rating">
          <img src="/dist/images/goodreads-icon.png" />
          <br />
          <span>{data.goodreads_rating}</span>
        </a>
        <a className="badge" href={data.reflink} title="Amazon Rating">
          <img src="/dist/images/amazon-icon.gif" />
          <br />
          <span>{data.amazon_rating}</span>
        </a>
      </div>
    );
  }
}

