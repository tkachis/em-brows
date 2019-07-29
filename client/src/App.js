import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'

function App() {
	return (
		<BrowserRouter>
			<section className="container">
				<Header />
			</section>
		</BrowserRouter>
	)
}

export default App
