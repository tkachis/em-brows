import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Login from './components/auth/Login'

function App() {
	return (
		<BrowserRouter>
			<section className="container">
				<Header />
				<Switch>
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/login" component={Login} />
				</Switch>
				<Footer />
			</section>
		</BrowserRouter>
	)
}

export default App
