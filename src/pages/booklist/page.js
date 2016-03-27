import React from "react";
import styles from "./style.css";

import BookItem from './bookitem';
import Header from './header';

export default class BookListPage extends React.Component {

	constructor(props, context) {
	    super(props);
	    //context.router;
	    this.state = {
	    	booklist: null
	    }
	}

	componentDidMount() {
		this.fetchBooklist(this.props.params.id);
	}

	componentDidUpdate (prevProps) {
	    // respond to parameter change in scenario 3
	    let oldId = prevProps.params.id
	    let newId = this.props.params.id
	    if (newId !== oldId)
	      this.fetchBooklist(newId)
	}

	fetchBooklist(id) {
		fetch(`http://localhost:8888/api/booklists/${id}`).then((res) => {
          console.log('fetched data:');
          return res.json();
       	})
       	.then((booklist) => {
       		console.log(booklist);
          this.setState({ booklist });
       	});
	}

	render() {
		const booklist = this.state.booklist;
	    const imagePath = "/dist/images/";
    	let bookItems = []; 
    	let person = null;
    	let books = null;

	    if (booklist) {
			person = JSON.parse(booklist.person);
	    	books = JSON.parse(booklist.books);

	    	console.log('rendering booklist: ');
		    console.log(books);

	        for (let book of books) {
		      bookItems.push(
		        <div className="pure-u-1-4">
		          <BookItem book={book} />
		        </div>
		      );
		    }
		}

	    return (
		    <div className="list-page">
		    { booklist && person &&
		        <Header title={person.name} data={person} />
		    }
		        <div className="content list-content">
		          <div className="pure-g">
		            { booklist && bookItems.length ? bookItems : "Loading..." }
		          </div>
		        </div>
	      	</div>
	    );
	}

}
