import React, { Component, useState } from 'react'
import Graph from './Graph'
import AddGraph from './AddGraph'
import styled from 'styled-components'

export default class Graphs extends Component {

	constructor(props){
		super();
	}
	
	componentDidMount(){
		this.setState({graphs: []})
	}

	addGraph = e =>{
		e.preventDefault()
		const newArr = this.state.graphs
		newArr.push(e.target[0].value)
		this.setState(newArr)
	}

	render() {
		const ManyGraphs = styled.div`
			display: flex;
			justify-content: space-around;
		`


		return (
			<ManyGraphs>
				<Graph graphPieces={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
				{this.state && this.state.graphs.map(graph => {
					return <Graph key={graph+new Date().toString()} graphPieces={[]} name={graph}/>
				})}
				<AddGraph addGraph={this.addGraph.bind(this)}/>
			</ManyGraphs>
		)
	}
}
