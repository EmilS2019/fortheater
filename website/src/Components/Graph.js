import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'
import Name from './Name'

export default class Graph extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const Graph = styled.div`
			min-height: 300px;
			border: solid 1px black;
			display: flex;
			flex-direction: column-reverse;
			width:200px;
			align-items:center;
		`

		const graphPieces = this.props.graphPieces.map(piece => (
			<GraphPiece piece={piece} key={piece} />
		))

		return <Graph className="Name">
		{graphPieces}
		</Graph>
	}
}
