import React from 'react'
import Names from './Components/Names'
import Graph from './Components/Graph'
import styled from 'styled-components'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`

	return (
		<App>
			<Names names={['Emil', 'Någon', 'Person1']} />
			<Graph />
		</App>
	)
}

export default App
