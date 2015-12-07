import "../styles/components/Sidebar";

import React, { Component } from "react";
import { connect } from "react-redux";

@connect(state => {
	const { user, team } = state;
	return { user, team };
})
export default class Sidebar extends Component {

	render () {

		const { team } = this.props;

		return (
			<div className="Sidebar">

				<section className="project-list">
					<header>
						Projects
					</header>
					<ul>
						<li><a>Internal Marketing Landing Page</a></li>
						<li><a>Vendor Portal</a></li>
					</ul>
				</section>

				<section className="team">
					<header>
						{ team.name }
					</header>
					<ul>
						<li>
							<a>
								<figure></figure>
								Jeremy Marquis (you)
							</a>
						</li>
						<li>
							<a>
								<figure></figure>
								Jael Sette
							</a>
						</li>
						<li>
							<a>
								<figure></figure>
								Jason Pecor
							</a>
						</li>
					</ul>
				</section>

				<section className="team">
					<header>
						Vanity Fair
					</header>
					<ul>
						<li>
							<a>
								<figure></figure>
								Christa Tealson
							</a>
						</li>
						<li>
							<a>
								<figure></figure>
								Matthew Buchannan
							</a>
						</li>
						<li>
							<a>
								<figure></figure>
								Ryan Henderson
							</a>
						</li>
					</ul>
				</section>

			</div>
		);

	}

}
