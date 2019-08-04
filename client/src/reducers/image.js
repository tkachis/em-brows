import { GET_IMAGES, IMAGE_ERROR } from '../constants'

const initialState = {
	images: [],
	error: {},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_IMAGES:
			return { ...state, images: payload }
		case IMAGE_ERROR:
			return { ...state, error: payload }
		default:
			return state
	}
}
