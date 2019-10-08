import React, { Component } from 'react'
import styled from 'styled-components'

export default class GraphPiece extends Component {
	render() {
		const Piece = styled.div`
			height: 100px;
			width: 100px;
			background: red;
		`
		return <Piece></Piece>
	}
}
