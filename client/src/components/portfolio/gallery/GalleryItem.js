import React from 'react'
import PropTypes from 'prop-types'

import styles from './Gallery.module.css'

const GalleryItem = ({
	image: { path, _id },
	isAuthenticated,
	deleteImage,
}) => {
	return (
		<div className={styles.item}>
			{isAuthenticated && (
				<button onClick={() => deleteImage(_id)} className={styles.delete}>
					<i className="fas fa-minus-circle fa-3x" />
				</button>
			)}
			<img
				src={`http://localhost:5000/uploads${path}`}
				alt="Brows"
				className={styles.image}
			/>
		</div>
	)
}

GalleryItem.propTypes = {
	image: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	deleteImage: PropTypes.func.isRequired,
}

export default GalleryItem
