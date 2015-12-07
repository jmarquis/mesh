import "../styles/components/Auth";

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePath } from "redux-simple-router";

import { setUpAuthListener, authenticate } from "../actions/user";

import Image from "../components/Image";

import logo from "../images/logo-vertical";

@connect(state => {
	const { authenticated } = state;
	return { authenticated };
})
export default class Auth extends Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			error: false,
			confirmedNotAuthenticated: false,
			authAttempted: false
		};
	}

	componentDidMount () {

		const { dispatch } = this.props;

		setTimeout(() => dispatch(setUpAuthListener()), 1000);

	}

	componentWillReceiveProps (nextProps) {

		const { dispatch } = this.props;

		if (nextProps.authenticated === true) {
			dispatch(updatePath("/teams"));
		} else if (nextProps.authenticated === "loading") {
			this.setState({
				loading: true
			});
		} else if (nextProps.authenticated === false) {
			this.setState({
				confirmedNotAuthenticated: true,
				loading: false,
				error: this.state.authAttempted || false
			});
		}

	}

	render () {
		if (!this.state.confirmedNotAuthenticated) {
			return (
				<div className="Auth">
					loading
				</div>
			);
		} else {
			return (
				<div className={ "Auth" + (this.state.error ? " error" : "") + (this.state.loading ? " loading" : "") }>
					<section>
						<Image src={logo}/>
						<p className="caption">
							Sign in with your email address and password.
						</p>
						<p className="error">
							Sorry, your email address or password is incorrect.
						</p>
						<form onSubmit={this.handleSubmit}>
							<input type="email" name="email" autoFocus placeholder="you@yourdomain.com" value={this.state.email} onChange={this.handleEmailChange}/>
							<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
							<input type="submit" value="Sign in"/>
						</form>
					</section>
				</div>
			);
		}

	}

	handleSubmit = (event) => {

		const { dispatch } = this.props;

		event.preventDefault();
		this.setState({ authAttempted: true });
		dispatch(authenticate(this.state.email, this.state.password));

	}

	handleEmailChange = (event) => {
		if (!this.state.loading) this.setState({ email: event.target.value.slice(0, 100) });
	}

	handlePasswordChange = (event) => {
		if (!this.state.loading) this.setState({ password: event.target.value.slice(0, 50) });
	}

}
