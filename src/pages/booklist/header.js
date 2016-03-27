import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {

	componentWillMount() {
	    console.log("[PageHeader] will mount with title: ", this.props.title);
	}

	render() {
		const imgUrl = this.props.data.image;
		const divStyle = {
		  backgroundImage: 'url(\'' + imgUrl + '\')',
		  backgroundRepeat: 'no-repeat',
		  backgroundSize: '100%',
		  backgroundPosition: 'center',
		  WebkitTransition: 'all', // note the capital 'W' here
		  MozTransition: 'all', 
		  transition: 'all'
		};

		return (
			<div className="rl-header">
	           	<h1 className="rl-title">{`${this.props.data.name || this.props.title}'s Reading List`}</h1>
	       		<div className="rl-person-info">
	       			<div className="rl-person-bio">{this.props.data.description}</div>
	       			<div className="rl-person-thumbnail" style={divStyle}></div>
	       		</div>
	        </div>
        );
	}
}
