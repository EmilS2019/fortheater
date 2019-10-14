import React, { Component } from 'react'
import styled from 'styled-components'
import graphpieces from './graphpieces.json'
import HoverBox from './HoverBox.js'

export default class GraphPiece extends Component {
	//Passes down piece, and piece is the index of the piece in the json file
	constructor(props) {
		super(props)
		this.props = props
		this.isClicked = false
		this.id = `piece-${this.props.piece}`
		this.piece = graphpieces[this.props.piece]
	}

	clicked(e) {
		if (!this.piece) return
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

			let { screenX, screenY } = e
			if (window.chrome) screenX -= screenX / 6
			if (window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)) screenY -= 100
			else screenY -= 200
			const hovers = document.elementsFromPoint(screenX, screenY)
			console.log(hovers)

			console.log({ screenX, screenY })
			hovers.forEach(hov => {
				if (hov.className.split(' ').includes('Name')) {
					hov.appendChild(document.querySelector(`#${this.id}`))
				}
			})
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
		if (this.piece) {
			var Piece = styled.div`
				height: ${this.piece.size}px;
				width: 100px;
				background: ${this.piece.color};
				cursor: pointer;
				box-sizing: border-box;
				border: 1px solid rgb(0, 0, 0, 00.2);
				transform-style: preserve-3d;
				filter: saturate(92%) brightness(90%);

				&:hover {
					filter: saturate(100%) brightness(110%);
				}
			`

			Piece.displayName = 'GraphPiece'

			return (
				<Piece className='hoverBox' onClick={this.clicked.bind(this)} id={this.id}>
					<HoverBox piece={this.piece} />
				</Piece>
			)
		}
	}
}
