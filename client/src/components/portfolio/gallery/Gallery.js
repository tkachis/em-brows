import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getImages, deleteImage } from '../../../actions/image'

import GalleryItem from './GalleryItem'

import styles from './Gallery.module.css'

const Gallery = ({
	getImages,
	deleteImage,
	image: { images },
	auth: { isAuthenticated },
}) => {
	useEffect(() => {
		getImages()
	}, [getImages])

	return !images ? (
		<h1>Нет изображений</h1>
	) : (
		<>
			<div className={styles.gallery}>
				{isAuthenticated && (
					<button className={styles.add}>
						<i className="fas fa-plus fa-5x" />
					</button>
				)}
				{images.map(image => (
					<GalleryItem
						key={image._id}
						image={image}
						isAuthenticated={isAuthenticated}
						deleteImage={deleteImage}
					/>
				))}
			</div>
		</>
	)
}

Gallery.propTypes = {
	getImages: PropTypes.func.isRequired,
	deleteImage: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	image: state.image,
	auth: state.auth,
})

export default connect(
	mapStateToProps,
	{ getImages, deleteImage }
)(Gallery)
