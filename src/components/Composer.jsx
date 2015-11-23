import "../styles/components/Composer";

import uploadIcon from "../images/upload";

import React, { Component } from "react";

import Image from "./Image";

export default class Composer extends Component {

	render () {
		return (
			<div className="Composer">
				<a><Image src={uploadIcon}/></a>
				<textarea placeholder="Type your message..." autoComplete={false} spellCheck={true} autoCorrect={false}/>
			</div>
		);
	}

}
