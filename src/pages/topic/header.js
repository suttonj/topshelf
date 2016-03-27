import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {

	componentWillMount() {
	    console.log("[PageHeader] will mount with title: ", this.props.title);
	}

	render() {
		return (
			<div className="rl-header">
	           	<h1 className="rl-title">{this.props.title || ""}</h1>
	       		<div className="rl-topic-info">
	       		</div>
	        </div>
        );
	}
}
