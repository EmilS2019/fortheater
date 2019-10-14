import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'

export default class Graph extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	componentDidMount(){
		document.querySelector(`#${this.props.id}`).addEventListener("DOMNodeInserted", e => {
		this.props.changeInGraphPieces(e);
	})
	document.querySelector(`#${this.props.id}`).addEventListener("DOMNodeRemoved", e => {
		this.props.changeInGraphPieces(e);
	})
}

	render() {
		const Graph = styled.div`
			min-height: 300px;
			display: flex;
			flex-direction: column-reverse;
			width:120px;
			align-items:center;
			margin:0 10px;
			p{
				order:-4;
			}
		`
		
		let graphPieces = []
		if (this.props.graphPieces){	
			graphPieces = this.props.graphPieces.map(piece => (
				<GraphPiece piece={piece} key={piece} />
				))
			}

		return <Graph className="Name" id={this.props.id}>
		{this.props.id !== "graph-0" && <button onClick={this.props.deleteGraph} className="button" style={{marginTop:0}}>X</button>}
		{graphPieces}
		<p>{this.props.name}</p>
		</Graph>
	}
}
