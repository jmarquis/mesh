import "../styles/components/Team";

import React, { Component } from "react";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

export default class Team extends Component {

	render () {
		return (
			<div className="Team">
				<Toolbar/>
				<div className="view-wrapper">
					<Sidebar/>
					{this.props.children}
				</div>
			</div>
		);
	}

}
