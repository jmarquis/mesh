import "../styles/components/SecondaryTeamSelector";

import React, { Component } from "react";

export default class SecondaryTeamSelector extends Component {

	constructor (props) {

		super(props);

		const { teams } = this.props;

		this.state = {
			selectedTeam: Object.keys(teams)[0]
		};

	}

	render () {

		const { teams } = this.props;

		return (
			<div className="SecondaryTeamSelector">
				<div>
					{this.state.selectedTeam}
				</div>
				<select value={this.state.selectedTeam} onChange={this.selectTeam}>
					{Object.keys(teams).map(teamId => {
						return <option value={teamId}>{teamId}</option>;
					})}
				</select>
			</div>
		);

	}

	selectTeam = (event) => {
		this.setState({
			selectedTeam: event.target.options[event.target.selectedIndex].value
		});
	}

}
