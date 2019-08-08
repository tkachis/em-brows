import axios from 'axios'

import { GET_IMAGES, DELETE_IMAGE, IMAGE_ERROR } from '../constants'

// Get All Images
export const getImages = () => async dispatch => {
	try {
		const res = await axios.get('/api/image')

		dispatch({
			type: GET_IMAGES,
			payload: res.data,
		})
	} catch (err) {
		console.log(err)

		dispatch({
			type: IMAGE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

// Delete Image
export const deleteImage = imageId => async dispatch => {
	try {
		await axios.delete(`api/image/${imageId}`)

		dispatch({
			type: DELETE_IMAGE,
			payload: imageId,
		})
	} catch (err) {
		console.log(err)

		dispatch({
			type: IMAGE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}
