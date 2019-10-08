import React, { Component } from 'react'
import Name from './Name'
import styled from 'styled-components'

export default class Names extends Component {
	constructor(props) {
		super(props)
		this.state = { names: props.names }
	}

	componentDidMount() {}

	render() {
		const NameList = styled.div`
			display: flex;
			div {
				margin: 40px;
			}
		`

		const deleteName = i => {
			let newarr = this.state.names
			newarr.splice(i)
			this.setState({ names: newarr })
		}

		const addName = e => {
			e.preventDefault()
			let newarr = this.state.names
			newarr.push(e.target[0].value)
			this.setState({ names: newarr })
		}

		console.log()
		this.state.names.map((name, i) => {
			console.log(i)
		})

		const nameList = this.state.names.map((name, i) => (
			<Name deleteName={() => deleteName(i)} key={i} name={name} />
		))

		return (
			<div>
				<NameList>{nameList}</NameList>
				<form onSubmit={addName}>
					<label>Namn: </label>
					<input type='text' id='name'></input>
					<button type='submit'>Lägg till</button>
				</form>
			</div>
		)
	}
}
