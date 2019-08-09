import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getImages, deleteImage, uploadImage } from '../../../actions/image'

import GalleryItem from './GalleryItem'
import FormItem from './formItem/FormItem'

import styles from './Gallery.module.css'

const Gallery = ({
	getImages,
	deleteImage,
	uploadImage,
	image: { images },
	auth: { isAuthenticated },
}) => {
	useEffect(() => {
		getImages()
	}, [getImages])

	return !images ? (
		<h1>Нет изображений</h1>
	) : (
		<div className={styles.gallery}>
			{isAuthenticated && <FormItem uploadImage={uploadImage} />}
			{images.map(image => (
				<GalleryItem
					key={image._id}
					image={image}
					isAuthenticated={isAuthenticated}
					deleteImage={deleteImage}
				/>
			))}
		</div>
	)
}

Gallery.propTypes = {
	getImages: PropTypes.func.isRequired,
	deleteImage: PropTypes.func.isRequired,
	uploadImage: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	image: state.image,
	auth: state.auth,
})

export default connect(
	mapStateToProps,
	{ getImages, deleteImage, uploadImage }
)(Gallery)
