import "../styles/components/ToolbarNav";

import React, { Component } from "react";

import SearchField from "./SearchField";

export default class ToolbarNav extends Component {

	render () {
		return (
			<div className="ToolbarNav">

				<nav>
					<a>Discussion</a>
					<a>Files</a>
				</nav>

				<SearchField/>

			</div>
		);
	}

}
