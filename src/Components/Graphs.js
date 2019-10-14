import React, { Component } from 'react'
import Graph from './Graph'
import styled from 'styled-components'

export default class Graphs extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.setState({ graphs: [[0, 2], [3, 4], [5, 1]] })
	}

	render() {
		const Graphs = styled.div`
			width: 100vw;
			display: flex;
			justify-content: space-around;
		`
		let graphs = []
		if (this.state && this.state.graphs) {
			graphs = this.state.graphs.map(graph => <Graph graphPieces={graph}></Graph>)
		}
		return <Graphs>{graphs}</Graphs>
	}
}
