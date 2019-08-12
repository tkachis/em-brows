import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Alert from './components/layout/alert/Alert'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Login from './components/auth/Login'

import { getUser } from './actions/auth'
import setAuthToken from './helpers/setAuthToken'

setAuthToken(localStorage.token)

function App() {
	useEffect(() => {
		store.dispatch(getUser())
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<section className="container">
					<Header />
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/login" component={Login} />
					</Switch>
					<Alert />
					<Footer />
				</section>
			</Router>
		</Provider>
	)
}

export default App
