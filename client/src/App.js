import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Routes from './components/routes/Routes'

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
				<Routes />
			</Router>
		</Provider>
	)
}

export default App
