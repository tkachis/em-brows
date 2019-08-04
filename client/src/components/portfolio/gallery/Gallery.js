import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getImages } from '../../../actions/image'

import GalleryItem from './GalleryItem'

import styles from './Gallery.module.css'

const Gallery = ({ getImages, image: { images } }) => {
	useEffect(() => {
		getImages()
	}, [getImages])

	return !images ? (
		<h1>Нет изображений</h1>
	) : (
		<div className={styles.gallery}>
			{images.map(image => (
				<GalleryItem key={image._id} image={image} />
			))}
		</div>
	)
}

Gallery.propTypes = {
	getImages: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	image: state.image,
})

export default connect(
	mapStateToProps,
	{ getImages }
)(Gallery)
