import React, { Component } from 'react'
import Graph from './Graph'
import styled from 'styled-components'

export default class Graphs extends Component {

	
	componentDidMount(){
		this.setState({graphs: []})
	}

	addGraph = e =>{
		e.preventDefault()
		const newName = window.prompt("Lägg till person")
		const newArr = this.state.graphs
		if (newArr.length <= 18){
			newArr.push(newName)
			this.setState(newArr)
			console.log(newArr)
			window.localStorage.graphs = JSON.stringify(newArr)
		}
		else{
			window.alert("Du får ej lägga till fler än 18 människor")
		}
	}

	deleteGraph = () =>{
		console.log("delete dis")
	}

	render() {
		const ManyGraphs = styled.div`
			display: flex;
			justify-content: space-around;
			width:100vw;
		`

		return (
			<ManyGraphs>
				<Graph  deleteGraph={this.deleteGraph.bind(this)} graphPieces={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] } />
				{this.state && this.state.graphs.map(graph => {
					return <Graph key={Math.random()*1000000000} graphPieces={[]} name={graph}/>
				})}
				<button className="button" onClick={this.addGraph}>+</button>
			</ManyGraphs>
		)
	}
}
