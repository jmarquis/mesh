import "../styles/components/Message";

import React, { Component } from "react";

export default class Message extends Component {

	render () {
		return (
			<div className="Message">
				<figure></figure>
				<div className="message">
					<header>Jael Sette</header>
					<section>what do you think?</section>
				</div>
			</div>
		);
	}

}
