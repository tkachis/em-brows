import React, { useContext } from 'react'
import { Switch, Route, __RouterContext } from 'react-router-dom'

import Landing from '../landing/Landing'
import Portfolio from '../portfolio/Portfolio'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import Login from '../auth/Login'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Alert from '../layout/alert/Alert'

import useWindowDimensions from '../../helpers/useWindowDimensions'

function useRouter() {
	return useContext(__RouterContext)
}

const Routes = () => {
	const { location } = useRouter()
	const { width } = useWindowDimensions()

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/contacts" component={Contacts} />
				<Route exact path="/login" component={Login} />
			</Switch>
			<Alert />
			{!(width <= 900 && location.pathname === '/') && <Footer />}
		</>
	)
}

export default Routes
