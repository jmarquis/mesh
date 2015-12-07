import "../styles/components/Composer";

import uploadIcon from "../images/upload";

import React, { Component } from "react";

import Image from "./Image";

export default class Composer extends Component {

	constructor (props) {
		super(props);
		this.state = {
			message: "",
			focused: false
		};
	}

	render () {
		return (
			<div className={ "Composer" + (this.state.focused ? " focused" : "") }>
				<a><Image src={uploadIcon}/></a>
				<textarea placeholder="Type your message..." autoComplete={false} spellCheck={true} autoCorrect={false} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.message}/>
			</div>
		);
	}

	handleFocus = () => {
		this.setState({ focused: true });
	}

	handleBlur = () => {
		this.setState({ focused: false });
	}

	handleChange = (event) => {
		this.setState({ message: event.target.value });
	}

	handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			// TODO: post message
		}
	}

}
