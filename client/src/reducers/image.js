import { GET_IMAGES, DELETE_IMAGE, IMAGE_ERROR } from '../constants'

const initialState = {
	images: [],
	error: {},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_IMAGES:
			return { ...state, images: payload }
		case DELETE_IMAGE:
			return {
				...state,
				images: state.images.filter(image => image._id !== payload),
			}
		case IMAGE_ERROR:
			return { ...state, error: payload }
		default:
			return state
	}
}
