import {
	GET_IMAGES,
	UPLOAD_IMAGE,
	DELETE_IMAGE,
	IMAGE_ERROR,
	UPLOAD_ERROR,
} from '../constants'

const initialState = {
	images: [],
	error: {},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_IMAGES:
			return { ...state, images: payload }
		case UPLOAD_IMAGE:
			return { ...state, images: [payload, ...state.images] }
		case UPLOAD_ERROR:
			return { ...state, error: payload }
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
