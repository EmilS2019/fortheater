import React, { Component } from 'react'
import Graph from './Graph'
import styled from 'styled-components'

export default class Graphs extends Component {

	
	componentDidMount(){
		this.setState({graphs: 
			[{
			name:"Alla", 
			pieces:[0, 1, 2, 3, 4, 5, 6, 7, 
				8, 9, 10, 11, 12, 13, 14, 15, 16
			]}]		
	})}

	addGraph = e =>{
		e.preventDefault()
		window.localStorage.clear();

		//Asks the user for information
		const newName = window.prompt("Lägg till person")

		//Checks if there's less than 18 people in the list
		const newArr = this.state.graphs
		newArr.forEach(ar => [
			ar.pieces = []
		])
		const maxPeople = 18
		if (newArr.length > maxPeople){
			window.alert(`Du får ej lägga till fler än ${maxPeople} människor`)
			return;
		}

		//Takes the input name and adds it to the temporary array
		let newGraph = {name: newName, pieces:[]}
		newArr.push(newGraph)

		//Gets all the graphs from the dom so we can store the graphpieces inside of them
		const oldArrDOM = document.querySelector("#graphs").children

		//.length -1 to avoid the + button
		for (let i = 0; i < oldArrDOM.length-1; i++) {
			console.log(newArr[i])
			for (let j = 0; j < oldArrDOM[i].children.length; j++) {
				const graphPieceID = oldArrDOM[i].children[j].id
				if (graphPieceID){
					const IDnum = graphPieceID.split('-')[1]
					newArr[i].pieces.push(IDnum)
				}
			}
			console.log(newArr)
			
		}
		this.setState({graphs: newArr})
	}

	saveTooLocalStorage = () => {

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
			<ManyGraphs id={"graphs"}>
				{this.state && this.state.graphs.map((graph, i) => {
					return <Graph graphPieces={graph.pieces} id={`graph-${i}`} key={Math.random()*1000000000} name={graph.name}/>
				})}
				<button className="button" onClick={this.addGraph}>+</button>
			</ManyGraphs>
		)
	}
}
