import "../styles/components/Team";

import React, { Component } from "react";
import { connect } from "react-redux";

import { setCurrentTeam } from "../actions/team";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

@connect(state => ({ team: state.team }))
export default class Team extends Component {

	componentDidMount () {
		const { dispatch } = this.props;
		const { teamId } = this.props.params;
		dispatch(setCurrentTeam(teamId));
	}

	render () {

		const { team } = this.props;

		if (!team) return <div className="Team"/>;

		return (
			<div className="Team">
				<Toolbar team={team}/>
				<div className="view-wrapper">
					<Sidebar/>
					{this.props.children}
				</div>
			</div>
		);

	}

}
