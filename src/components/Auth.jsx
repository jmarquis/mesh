import "../styles/components/Auth";

import React, { Component } from "react";
import { connect } from "react-redux";
import { pushState } from "redux-simple-router";

import { authenticate } from "../firebase/index";

import Image from "../components/Image";

import logo from "../images/logo-vertical.svg";

@connect(state => {

	const { router } = state;

	return {
		router
	};

}, {
	pushState
})
export default class Auth extends Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount () {

		const { router } = this.props;

		console.log("ROUTER", router);

		setTimeout(() => {
			authenticate().then(() => {
				this.props.pushState("/");
			}).catch(() => {
				this.setState({ loading: false });
			});
		}, 1000);

	}

	render () {

		if (this.state.loading)
			return (
				<div>
					loading
				</div>
			);

		if (!this.state.loading && !this.state.authenticated) {
			return (
				<div className="Auth">
					<section>
						<Image svg={logo}/>
						<div className="caption">
							Sign in with your email address and password.
						</div>
						<form onSubmit={this.handleSubmit}>
							<input type="email" name="email" placeholder="you@yourdomain.com" value={this.state.email} onChange={this.handleEmailChange}/>
							<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
							<input type="submit" value="Sign in"/>
						</form>
					</section>
				</div>
			);
		}

		if (this.state.authenticated) {
			return (
				<div>
					You are logged in!
				</div>
			);
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		authenticate(this.state.email, this.state.password)
			.then(() => {

			})
			.catch(() => {

			});
	}

	handleEmailChange = (event) => {
		this.setState({ email: event.target.value.slice(0, 100) });
	}

	handlePasswordChange = (event) => {
		this.setState({ password: event.target.value.slice(0, 50) });
	}

}
