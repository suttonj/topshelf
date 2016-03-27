import React from "react";
import styles from "./style.css";

import Person from './person';
import Header from './header';

export default class TopicPage extends React.Component {

	constructor(props, context) {
	    super(props);
	    //context.router;
	    this.state = {
	    	topic: null
	    }
	}

	componentDidMount() {
		this.fetchTopic(this.props.params.id);
	}

	componentDidUpdate (prevProps) {
	    // respond to parameter change in scenario 3
	    let oldId = prevProps.params.id
	    let newId = this.props.params.id
	    if (newId !== oldId)
	      this.fetchTopic(newId)
	}

	fetchTopic(id) {
		fetch(`http://localhost:8888/api/topics/${id}`).then((res) => {
          console.log('fetched data:');
          return res.json();
       	})
       	.then((topic) => {
       		console.log(topic);
          this.setState({ topic });
       	});
	}

	render() {
		let topic = this.state.topic;
		let people = [];
	    if (topic) {
	    	console.log('rendering topic: ');
		    console.dir(topic);

		    for (let person of topic.people) {
		      if (person) {
		        people.push(
		          <div className="pure-u-1-3">
		            <Person person={person} key={person._id}/>
		          </div>
		        );
		      }
		    }
		}

	    return (
	      <div className="list-page">
	        <Header title={topic ? topic.title : null} type="topic" />
	        <div className="content list-content">
	          <div className="pure-g">
	            { topic && people.length ? people : "Loading..." }
	          </div>
	        </div>
	      </div>
	    );
	}
}
