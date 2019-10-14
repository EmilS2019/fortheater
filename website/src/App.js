import React from 'react'
import styled from 'styled-components'
import Graphs from './Components/Graphs'
import Firebase from './firebase'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`

	return (
		<App>
			<Graphs />
			<Firebase />
		</App>
	)
}

export default App
