import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'

export default class Graph extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const Graph = styled.div`
			min-height: 300px;
			display: flex;
			flex-direction: column-reverse;
			width:98px;
			align-items:center;
			margin:0 10px;
		`

		const graphPieces = this.props.graphPieces.map(piece => (
			<GraphPiece piece={piece} key={piece} />
		))

		return <Graph className="Name">
		{graphPieces}
		{this.props.name}
		</Graph>
	}
}
