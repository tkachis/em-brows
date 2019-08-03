import { GET_IMAGES, IMAGE_ERROR } from '../constants'

const initialState = {
	images: [],
	loading: true,
	error: {},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_IMAGES:
			return { ...state, images: payload, loading: false }
		case IMAGE_ERROR:
			return { ...state, error: payload, loading: false }
		default:
			return state
	}
}
