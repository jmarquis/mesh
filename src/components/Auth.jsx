import "../styles/components/Auth";

import React, { Component } from "react";

import { authenticate } from "../firebase/index";

import Image from "../components/Image";

import logo from "../images/logo-vertical.svg";

export default class Auth extends Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			authenticated: false
		};
	}

	componentDidMount () {
		authenticate().then(() => {
			this.setState({ authenticated: true, loading: false });
		}).catch(() => {
			this.setState({ loading: false });
		});
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
						<form>
							<input type="email" placeholder="you@yourdomain.com"/>
							<input type="password" placeholder="password"/>
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

}
