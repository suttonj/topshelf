import React from "react";
import { Link } from 'react-router';

export default class Person extends React.Component {

  componentWillMount() {
    console.log("[Person] will mount with server response: ", this.props.person);
  }

  render() {
    let person = this.props.person;
    console.log('rendering person: ');
    console.dir(person);
    return (
      <div className="book-panel">
        <Link
          to={`/booklist/${person.booklist}`}
          params={{ id: person.booklist }} >
            <img className="thumbnail pure-img-responsive" key={person._id} src={person.image} />
            <div className="book-title">
              <span className="small-title">{person.name}</span>
            </div>
        </Link>
      </div>
    );
  }
}

