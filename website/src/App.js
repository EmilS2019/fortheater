import React from 'react'
import styled from 'styled-components'
import Graphs from './Components/Graphs'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`
	console.log(window.localStorage.graphs)
	window.localStorage.clear()
	// window.prompt("hi")

	return (
		<App>
			<Graphs />
		</App>
	)
}

export default App
