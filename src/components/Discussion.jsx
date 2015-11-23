import "../styles/components/Discussion";

import React, { Component } from "react";

import ScrollPane from "./ScrollPane";
import Composer from "./Composer";
import Message from "./Message";

export default class Discussion extends Component {

	componentDidMount () {
		this.refs.scrollPane.scrollToBottom();
	}

	render () {
		return (
			<div className="Discussion">
				<ScrollPane ref="scrollPane">
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
					<Message/>
				</ScrollPane>
				<Composer/>
			</div>
		);
	}

}
