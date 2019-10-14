import React from 'react'
import styled from 'styled-components'
import Graphs from './Components/Graphs'

function App() {
	const App = styled.div`
		display: flex;
		justify-content: space-around;
	`

	return (
		<App>
			<div
				style={{
					position: 'fixed',
					top: '0',
					left: '0',
					width: '10px',
					height: '10px',
					background: 'black'
				}}
			></div>
			<Graphs />
		</App>
	)
}

export default App
