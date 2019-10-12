import React from 'react'
// import Names from './Components/Names'
import Graph from './Components/Graph'
import styled from 'styled-components'
// import Graphs from './Components/Graphs'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`

	return (
		<App>
			{/* <Graphs /> */}
			{/* <Names names={['Emil', 'Någon', 'Person1']} /> */}
			<Graph name={"Emil"} graphPieces={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
			<Graph graphPieces={[]} />
		</App>
	)
}

export default App
