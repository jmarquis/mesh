import "../styles/components/Toolbar";

import React, { Component } from "react";

import SecondaryTeamSelector from "./SecondaryTeamSelector";
import ToolbarNav from "./ToolbarNav";

export default class Toolbar extends Component {

	render () {
		return (
			<div className="Toolbar">

				<div className="team-names">
					<div className="primary-team">
						<figure></figure>
						Syllable +
					</div>
					<SecondaryTeamSelector/>
				</div>

				<ToolbarNav/>

			</div>
		);
	}

}
