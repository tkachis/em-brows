import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
	auth: { isAuthenticated, user },
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
			{!user.isAdmin && images.length === 0 ? (
				<h1>Нет изображений</h1>
			) : (
				<div className={styles.gallery}>
					{isAuthenticated && user.isAdmin && (
						<FormItem uploadImage={uploadImage} />
					)}
					{galleryItemAnimation.map(({ item, props: animation }) => (
						<GalleryItem
							key={item._id}
							image={item}
							isAuthenticated={isAuthenticated}
							user={user}
							deleteImage={deleteImage}
							animation={animation}
						/>
					))}
				</div>
			)}
		</>
	)
}

Gallery.propTypes = {
	image: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	getImages: PropTypes.func.isRequired,
	deleteImage: PropTypes.func.isRequired,
	uploadImage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	image: state.image,
	auth: state.auth,
})

export default connect(
	mapStateToProps,
	{ getImages, deleteImage, uploadImage }
)(Gallery)
