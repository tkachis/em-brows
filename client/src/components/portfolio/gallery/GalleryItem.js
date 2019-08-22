import React from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import styles from './Gallery.module.css'

const GalleryItem = ({
	image: { path, _id },
	isAuthenticated,
	user,
	deleteImage,
	scrollPosition,
	animation,
}) => {
	return (
		<animated.div className={styles.item} style={animation}>
			{isAuthenticated && user.isAdmin && (
				<button onClick={() => deleteImage(_id)} className={styles.delete} />
			)}
			<LazyLoadImage
				className={styles.image}
				alt="Brows"
				effect="blur"
				src={`/uploads${path}`}
				height={'100%'}
				width={'100%'}
				scrollPosition={scrollPosition}
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
