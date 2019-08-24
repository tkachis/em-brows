import React from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'

import styles from './Gallery.module.css'

const GalleryItem = ({
	image: { path, _id },
	isAuthenticated,
	user,
	deleteImage,
	animation,
}) => {
	return (
		<animated.div className={styles.item} style={animation}>
			{isAuthenticated && user.isAdmin && (
				<button onClick={() => deleteImage(_id)} className={styles.delete} />
			)}
			<img
				className={styles.image}
				alt="gallery item"
				src={`/uploads${path}`}
			/>
		</animated.div>
	)
}

GalleryItem.propTypes = {
	image: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	deleteImage: PropTypes.func.isRequired,
}

export default GalleryItem
