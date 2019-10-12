import React, { Component } from 'react'
import Graph from './Graph'
import AddGraph from './AddGraph'
import styled from 'styled-components'

export default class Graphs extends Component {
	render() {
		const ManyGraphs = styled.div`
			display: flex;
			justify-content: space-around;
		`

		return (
			<ManyGraphs>
				<Graph name={"Emil"} graphPieces={[]}/>
				<Graph graphPieces={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
			</ManyGraphs>
		)
	}
}
