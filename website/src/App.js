import React from 'react'
import styled from 'styled-components'
import Graphs from './Components/Graphs'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`
	window.localStorage.setItem("graphs", {})
	// console.log(JSON.parse(window.localStorage[2]))
	window.localStorage.clear()

	return (
		<App>
			<Graphs />
		</App>
	)
}

export default App
