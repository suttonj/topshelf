import React from 'react';
import { Link } from 'react-router';

import Sidebar from "./Sidebar";

export default class App extends React.Component {

	constructor(props) {
	    super(props);
	    //context.router;
	    this.state = {
	    	topics: []
	    }
	    //this.renderTopics = this.renderTopics.bind(this);
	}

	componentWillMount() {
		fetch('http://localhost:8888/api/topics').then((res) => {
          console.log('fetched data:')
          return res.json();
       	})
       	.then((topics) => {
       		console.dir(topics);
          this.setState({ topics });
       	});
	}

	renderTopics() {
	    console.log('rendering topics');
	    if (this.state.topics.length) {
	    	return this.state.topics.map((topic) => {
		    	let title = topic.title;
		      	return (
		        	<li className="pure-menu-item" key={topic._id}>
		          		<Link
		            		className="PersonList__Link"
				            to={`/topic/${topic._id}`}
				            params={{id: topic._id}} >
		            		{title}
		          		</Link>
		        	</li>
		      	);
		    });
	    }
	    else {
	    	return (
		    	<li className="pure-menu-item" key={1}>
	          		<Link
	            		className="PersonList__Link"
			            to={`#`}>
	            		Loading...
	          		</Link>
	        	</li>
		    )
	    }
	}

	render() {
		return (
	        <div id="main">
            	<Sidebar items={this.renderTopics()} />

      			<div id="content">
      				{this.props.children}
      			</div>
	        </div>
		);
	}
}
