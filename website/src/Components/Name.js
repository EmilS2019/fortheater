import React, { Component } from 'react'
import Graph from './Graph'

export default class Name extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		return (
			<div className='Name'>
				<Graph graphPieces={[]} />
				{this.props.name}
				<button onClick={this.props.deleteName}>X</button>
			</div>
		)
	}
}
