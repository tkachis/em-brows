import { LOGIN_SUCCESS, LOGIN_FAIL, GET_USER, LOGOUT } from '../constants'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	user: null,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER:
			return {
				...state,
				isAuthenticated: true,
				user: payload,
			}
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token)
			return {
				...state,
				...payload,
				isAuthenticated: true,
			}
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				isAuthenticated: false,
			}
		default:
			return state
	}
}
