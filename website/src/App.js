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
<<<<<<< HEAD:src/App.js
			{/* <Graphs /> */}
			{/* <Names names={['Emil', 'Någon', 'Person1']} /> */}
=======
>>>>>>> 9db0a69df2391118fe8dee8c8a7ed2b141cbdd8a:website/src/App.js
			<Graphs />
		</App>
	)
}

export default App
