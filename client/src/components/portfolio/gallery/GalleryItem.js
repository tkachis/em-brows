import React from 'react'

import styles from './Gallery.module.css'

const GalleryItem = ({ image: { path } }) => {
	return (
		<div className={styles.item}>
			<img
				src={`http://localhost:5000/uploads${path}`}
				alt="Brows"
				className={styles.image}
			/>
		</div>
	)
}

export default GalleryItem
