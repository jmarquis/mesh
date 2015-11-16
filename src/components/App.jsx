import "../styles/components/App";

import React, { Component } from "react";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

export default class App extends Component {

	render () {
		return (
			<div className="App">
				<Toolbar/>
				<div className="view-wrapper">
					<Sidebar/>
					{this.props.children}
				</div>
			</div>
		);
	}

}
