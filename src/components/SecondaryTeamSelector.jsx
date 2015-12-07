import "react-select/dist/react-select.css";
import "../styles/components/SecondaryTeamSelector";

import React, { Component } from "react";

export default class SecondaryTeamSelector extends Component {

	render () {

		const { teams } = this.props;

		const teamsArray = [{
			value: 123,
			label: "A Longer Title"
		}, ...Object.keys(teams).map(teamId => {
			return {
				value: teamId,
				label: teamId
			};
		})];

		return (
			<div className="SecondaryTeamSelector">
				<Select value={teamsArray[0].value} options={teamsArray}/>
				{ /* <div>
					{Object.keys(teams).map(teamId => {
						return teamId;
					})}
				</div> */ }
			</div>
		);

	}

}
