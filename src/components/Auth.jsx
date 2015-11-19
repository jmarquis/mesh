import "../styles/components/Auth";

import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePath } from "redux-simple-router";

import { authenticate } from "../firebase/index";

import Image from "../components/Image";

import logo from "../images/logo-vertical.svg";

@connect()
export default class Auth extends Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			error: false,
			confirmedNotAuthenticated: false
		};
	}

	componentDidMount () {

		const { dispatch } = this.props;

		setTimeout(() => {
			authenticate()
				.then(() => {
					dispatch(updatePath("/teams/123"));
				})
				.catch(() => {
					this.setState({
						loading: false,
						confirmedNotAuthenticated: true
					});
				});
		}, 1000);

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
						<Image svg={logo}/>
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

		this.setState({
			loading: true
		});

		setTimeout(() => {
			authenticate(this.state.email, this.state.password)
				.then(() => {
					dispatch(updatePath("/teams/123"));
				})
				.catch(() => {
					this.setState({
						loading: false,
						error: true
					});
				});
		}, 500);

	}

	handleEmailChange = (event) => {
		if (!this.state.loading) this.setState({ email: event.target.value.slice(0, 100) });
	}

	handlePasswordChange = (event) => {
		if (!this.state.loading) this.setState({ password: event.target.value.slice(0, 50) });
	}

}
