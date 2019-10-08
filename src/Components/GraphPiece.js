import React, { Component } from 'react'
import styled from 'styled-components'
import graphpieces from './graphpieces.json'

export default class GraphPiece extends Component {
	//Passes down piece, and piece is the index of the piece in the json file
	constructor(props) {
		super(props)
		this.props = props
	}

	dragStart(e) {
		e.dataTransfer.setData('text', 'foo')
		setTimeout(() => (this.className = 'invisible'), 0)
	}

	dragEnd() {
		console.log('dragend')
	}

	render() {
		//Finds the piece in the json file
		const Piece = styled.div`
			height: ${graphpieces[this.props.piece].size}px;
			width: 100px;
			background: ${graphpieces[this.props.piece].color};
			cursor: pointer;
			/* pointer-events: none; */
		`
		Piece.displayName = 'GraphPiece'

		return (
			<Piece
				className=''
				draggable='true'
				onDragStart={this.dragStart.bind(this)}
				onDragEnd={this.dragEnd.bind(this)}
				id={this.props.piece}
			></Piece>
		)
	}
}
