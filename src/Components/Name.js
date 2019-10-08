import React, { Component } from 'react'

export default class Name extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		return (
			<div>
				{this.props.name}
				<button onClick={this.props.deleteName}>X</button>
			</div>
		)
	}
}
