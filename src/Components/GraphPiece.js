import React, { Component } from 'react'
import styled from 'styled-components'
import graphpieces from './graphpieces.json'

export default class GraphPiece extends Component {
	//Passes down piece, and piece is the index of the piece in the json file
	constructor(props) {
		super(props)
		this.props = props
		this.isClicked = false
		this.id = `piece-${this.props.piece}`
	}

	componentDidMount() {}

	// dragStart(e) {
	// 	e.dataTransfer.setData('text', 'foo')
	// 	setTimeout(() => (this.className = 'invisible'), 0)
	// }

	clicked(e) {
		const { style } = document.querySelector(`#${this.id}`)
		//TO-DO: Reduntant code?
		//If already clicked, move back to position
		if (this.isClicked) {
			this.isClicked = false
			style.position = 'relative'
			style.left = '0'
			style.top = '0'
			style.zIndex = 0
			style.transform = ''
		} else {
			//Else follow the mouse (this won't update itself so the actuall following is done in movedMouse)
			this.isClicked = true
			style.position = 'absolute'
			style.left = `${e.clientX}px`
			style.top = `${e.clientY}px`
			style.zIndex = 3
			style.transform = 'translate(-50%, -50%)'
		}
	}

	movedMouse(e) {
		if (this.isClicked) {
			const { style } = document.querySelector(`#${this.id}`)
			style.left = `${e.clientX}px`
			style.top = `${e.clientY}px`
		}
	}

	render() {
		document.body.addEventListener('mousemove', this.movedMouse.bind(this))

		//Finds the piece in the json file
		const Piece = styled.div`
			height: ${graphpieces[this.props.piece].size}px;
			width: 100px;
			background: ${graphpieces[this.props.piece].color};
			cursor: pointer;
			box-sizing: border-box;
			transition: transform 0.4s;

			/* pointer-events: none; */
		`

		Piece.displayName = 'GraphPiece'

		return (
			<Piece
				className=''
				draggable='true'
				onClick={this.clicked.bind(this)}
				id={this.id}
			></Piece>
		)
	}
}
