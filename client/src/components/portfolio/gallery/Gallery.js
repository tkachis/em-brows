import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import { useTransition } from 'react-spring'
import PropTypes from 'prop-types'

import { getImages, deleteImage, uploadImage } from '../../../actions/image'

import GalleryItem from './GalleryItem'
import FormItem from './formItem/FormItem'
import Spinner from '../../layout/Spinner'

import styles from './Gallery.module.css'

const Gallery = ({
	getImages,
	deleteImage,
	uploadImage,
	image: { images, isLoading },
	auth: { isAuthenticated },
	scrollPosition,
}) => {
	useEffect(() => {
		getImages()
	}, [getImages])

	const galleryItemAnimation = useTransition(images, image => image._id, {
		trail: 100,
		from: {
			transform: 'scale(0)',
			opacity: 0,
		},
		enter: {
			transform: 'scale(1)',
			opacity: 1,
		},
		leave: {
			transform: 'scale(0)',
			opacity: 0,
		},
	})

	return isLoading ? (
		<Spinner />
	) : (
		<>
			{!images ? (
				<h1>Нет изображений</h1>
			) : (
				<div className={styles.gallery}>
					{isAuthenticated && <FormItem uploadImage={uploadImage} />}
					{galleryItemAnimation.map(({ item, props: animation }) => (
						<GalleryItem
							key={item._id}
							image={item}
							isAuthenticated={isAuthenticated}
							deleteImage={deleteImage}
							scrollPosition={scrollPosition}
							animation={animation}
						/>
					))}
				</div>
			)}
		</>
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

export default compose(
	trackWindowScroll,
	connect(
		mapStateToProps,
		{ getImages, deleteImage, uploadImage }
	)
)(Gallery)
