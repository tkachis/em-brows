import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './FormItem.module.css'

const FormItem = ({ uploadImage }) => {
	const [image, setImage] = useState('')
	const [dataUrl, setDataUrl] = useState('')

	const onSubmit = async e => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('file', image)

		uploadImage(formData)

		setImage('')
		setDataUrl('')
	}

	// https://jsfiddle.net/lesson8/9NeXg/
	const readDataUrl = input => {
		if (input.files && input.files[0]) {
			const reader = new FileReader()

			reader.onload = e => {
				setDataUrl(e.target.result)
			}
			reader.readAsDataURL(input.files[0])
		}
	}

	return (
		<>
			<form className={styles.form} onSubmit={e => onSubmit(e)}>
				<input
					type="file"
					name="file"
					onChange={e => {
						setImage(e.target.files[0])
						readDataUrl(e.target)
					}}
					id="fileLable"
				/>
				<label htmlFor="fileLable" className={styles.lableFile}>
					<i className="fas fa-plus fa-5x" />
				</label>
				<input type="submit" value="+" id="submitLable" />
			</form>
			{image && (
				<div className={styles.preview}>
					<img src={dataUrl} alt="Your file" className={styles.image} />
					<label htmlFor="submitLable" className={styles.labelSubmit}>
						Загрузить
					</label>
				</div>
			)}
		</>
	)
}

FormItem.propTypes = {
	uploadImage: PropTypes.func.isRequired,
}

export default FormItem
