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
			]},{
				name:"Test",
				pieces:[null]
			},{
				name:"Test",
				pieces:[]
			}
		]})


		
		}


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

		//Scans through the DOM for all the graph pieces and adds them to the temporary array
		//.length -1 to avoid the + button
		for (let i = 0; i < oldArrDOM.length-1; i++) {
			for (let j = 0; j < oldArrDOM[i].children.length; j++) {
				const graphPieceID = oldArrDOM[i].children[j].id
				if (graphPieceID){
					const IDnum = graphPieceID.split('-')[1]
					newArr[i].pieces.push(IDnum)
				}
			}
		}
		this.setState({graphs: newArr})
	}

	deleteGraph = e =>{
		//DOM ID is the id for the DOM object
		//Arr ID is for this.state object instead
		const DOMId = e.target.parentNode.id 
		const children = document.querySelector(`#${DOMId}`).children

		// for (let i = 0; i < children.length; i++) {
		// 	document.querySelector("#graph-0").appendChild(children[i])
		// }
		const arrId = DOMId.split("-")[1]
		
		const newArr = this.state.graphs
		console.log(this.state.graphs)
		// newArr.splice(arrId, 1)

		//Gets all the graphs from the dom so we can store the graphpieces inside of them
		const oldArrDOM = document.querySelector("#graphs").children
		console.log(oldArrDOM)
		
		for (let i = 0; i < oldArrDOM.length; i++) {
			if (i == arrId){
				const toRemove = document.querySelector(`#graph-${arrId}`)
				
				for (let j = 0; j < toRemove.children.length; j++) {
					const pieceToMove= Number.parseInt(toRemove.children[j].id.split('-')[1])
					pieceToMove && newArr[0].pieces.push(pieceToMove)
					console.log(newArr[0].pieces)
				}
			
				toRemove.remove()
				newArr.splice(arrId, 1)
			}
			else{

			}
			
		}
		this.setState(newArr)
	}

	changeInGraphPieces = e =>{
		let newArr = this.state.graphs
		const graphId = e.relatedNode.id.split("-")[1]
		const pieceId = Number.parseInt(e.target.id.split("-")[1])
		if (e.type === "DOMNodeRemoved"){
			// newArr[graphId].pieces[pieceId] = null

		}
		else if (e.type === "DOMNodeInserted"){
			newArr[graphId].pieces[pieceId] = pieceId
		}
		console.log(newArr)
		newArr[graphId].pieces.sort((a,b) => (a - b));
		this.setState(newArr)
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
					return <Graph changeInGraphPieces={this.changeInGraphPieces.bind(this)} deleteGraph={this.deleteGraph.bind(this)} graphPieces={graph.pieces} id={`graph-${i}`} key={Math.random()*1000000000} name={graph.name}/>
				})}
				<button className="button" onClick={this.addGraph}>+</button>
			</ManyGraphs>
		)
	}
}
