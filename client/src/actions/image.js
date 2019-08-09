import axios from 'axios'

import {
	GET_IMAGES,
	UPLOAD_IMAGE,
	DELETE_IMAGE,
	IMAGE_ERROR,
	UPLOAD_ERROR,
} from '../constants'

import { setAlert } from './alert'

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

// Upload Image
export const uploadImage = formData => async dispatch => {
	try {
		const res = await axios.post('api/upload', formData)

		if (res.data.msgError) {
			dispatch({
				type: UPLOAD_ERROR,
				payload: res.data.msgError,
			})

			dispatch(setAlert(res.data.msgError, 'danger'))

			return new Error()
		}

		dispatch({
			type: UPLOAD_IMAGE,
			payload: res.data.image,
		})

		dispatch(setAlert('Изображение загружено', 'success'))
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

		dispatch(setAlert('Изображение удалено', 'success'))
	} catch (err) {
		console.log(err)

		dispatch({
			type: IMAGE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}
