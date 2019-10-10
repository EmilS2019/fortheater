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
			<Graph graphPieces={[0, 1, 2]} />
			<Graph graphPieces={[0, 3]} />
		</App>
	)
}

export default App
