import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePath } from "redux-simple-router";

@connect(state => {
	const { user } = state;
	return { user };
})
export default class Teams extends Component {

	componentDidMount () {
		const { user, dispatch } = this.props;
		if (user.teams && user.teams.length === 1) {
			dispatch(updatePath("/teams/" + user.teams[0]));
		}
	}

	render () {
		return <div className="Teams"/>;
	}

}
