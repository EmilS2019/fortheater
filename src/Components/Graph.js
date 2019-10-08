import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'

export default class Graph extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	componentDidMount() {
		this.setState(this.props)
	}

	dragOver(e) {}

	dragEnd(e) {
		const hovers = document.elementsFromPoint(e.screenX, e.screenY)

		hovers.forEach(hov => {
			if (hov.className === 'Name') {
				console.log('Sucess')
				const div = hov.children[0]
				const newarr = this.state.graphPieces
				newarr.push(e.target.id)
				return
			}
		})
	}
	render() {
		const Graph = styled.div`
			min-height: 300px;
			/* transform: rotate(180deg); */
			border: solid 1px black;
		`
		let graphPieces = []

		if (this.state && this.state.graphPieces)
			graphPieces = this.state.graphPieces.map(piece => (
				<GraphPiece piece={piece} key={piece} />
			))

		return (
			<Graph onDragEnd={this.dragEnd.bind(this)} onDragOver={this.dragOver.bind(this)}>
				{graphPieces}
			</Graph>
		)
	}
}
