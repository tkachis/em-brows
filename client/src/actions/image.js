import axios from 'axios'

import { GET_IMAGES, IMAGE_ERROR } from '../constants'

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
