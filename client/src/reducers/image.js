import {
	GET_IMAGES,
	UPLOAD_IMAGE,
	DELETE_IMAGE,
	IMAGE_ERROR,
	UPLOAD_ERROR,
} from '../constants'

const initialState = {
	images: [],
	isLoading: true,
	error: {},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_IMAGES:
			return { ...state, images: payload, isLoading: false }
		case UPLOAD_IMAGE:
			return { ...state, images: [payload, ...state.images], isLoading: false }
		case UPLOAD_ERROR:
			return { ...state, error: payload, isLoading: false }
		case DELETE_IMAGE:
			return {
				...state,
				images: state.images.filter(image => image._id !== payload),
				isLoading: false,
			}
		case IMAGE_ERROR:
			return { ...state, error: payload, isLoading: false }
		default:
			return state
	}
}
