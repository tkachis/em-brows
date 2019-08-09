import axios from 'axios'
import setAuthToken from '../helpers/setAuthToken'

import { LOGIN_SUCCESS, LOGIN_FAIL, GET_USER, LOGOUT } from '../constants'
import { setAlert } from './alert'

// Get User
export const getUser = () => async dispatch => {
	// Add x-auth-token to request header
	setAuthToken(localStorage.token)

	try {
		const res = await axios.get('api/auth')

		dispatch({
			type: GET_USER,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
		})
	}
}

// Login
export const login = ({ email, password }) => async dispatch => {
	try {
		const res = await axios.post('api/auth', { email, password })

		// Get token
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		})

		dispatch(getUser())
	} catch (err) {
		const errors = err.response.data.errors

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
		}

		dispatch({
			type: LOGIN_FAIL,
		})
	}
}

// Loguot
export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT,
	})
}
