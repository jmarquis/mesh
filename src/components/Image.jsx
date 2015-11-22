import "../styles/components/Image";

import React, { Component } from "react";

export default class Image extends Component {

	render () {
		return (
			<div className="Image" dangerouslySetInnerHTML={{__html: this.props.src}}></div>
		);
	}

}
