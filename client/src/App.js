import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
	return (
		<BrowserRouter>
			<section className="container">
				<Header />
				<Footer />
			</section>
		</BrowserRouter>
	)
}

export default App
