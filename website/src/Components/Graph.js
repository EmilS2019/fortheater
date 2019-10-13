import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'

export default class Graph extends Component {
	constructor(props) {
		super(props)
		this.props = props
		
		/*if (typeof(this.props.id) === "undefined"){
			this.graphPieces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] 
		}*/
	}

	render() {
		const Graph = styled.div`
			min-height: 300px;
			display: flex;
			flex-direction: column-reverse;
			width:120px;
			align-items:center;
			margin:0 10px;
		`
		
		let graphPieces = []
		if (this.props.graphPieces){	
			graphPieces = this.props.graphPieces.map(piece => (
				<GraphPiece piece={piece} key={piece} />
				))
			}

		return <Graph className="Name" id={this.props.id}>
		<button onClick={this.props.deleteGraph} className="button" style={{marginTop:0}}>X</button>
		{graphPieces }
		{this.props.name}
		</Graph>
	}
}
