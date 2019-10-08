import React, { Component } from 'react'
import GraphPiece from './GraphPiece'
import styled from 'styled-components'

export default class Graph extends Component {
	render() {
		const Gp = styled.div`
			margin-top: 80vh;
		`
		return (
			<Gp>
				<GraphPiece />
			</Gp>
		)
	}
}
