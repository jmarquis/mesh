import "../styles/components/SearchField";

import searchIcon from "../images/search";

import React, { Component } from "react";

import Image from "./Image";

export default class SearchField extends Component {

	constructor (props) {
		super(props);
		this.state = {
			focused: false,
			expanded: false
		};
	}

	render () {
		return (
			<div className={ "SearchField" + (this.state.expanded ? " expanded" : "") + (this.state.focused ? " focused" : "") }>
				<Image src={searchIcon}/>
				<input type="text" placeholder="Search" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
			</div>
		);
	}

	handleFocus = () => {
		this.setState({
			focused: true,
			expanded: true
		});
	}

	handleBlur = (event) => {
		this.setState({
			focused: false,
			expanded: event.target.value
		});
	}

}
