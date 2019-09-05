import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const Card = ({ data: { src, text }, height, width }) => {
	const [on, toggle] = useState(false)

	const waypointsAnimation = useSpring({
		opacity: on ? 1 : 0,
		transform: on
			? 'translate3d(0, 0, 0) rotate(0)'
			: 'translate3d(0, 100%, 0) rotate(30deg)',
	})

	const calc = (x, y) => [-(y - height / 2) / 40, (x - width / 2) / 40, 1.1]
	const trans = (x, y, s) =>
		`perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

	const [{ xys }, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 200, friction: 100 },
	}))

	return (
		<animated.div className={styles.wrapper} style={waypointsAnimation}>
			<animated.div
				className={styles.card}
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				style={{ transform: xys.interpolate(trans) }}
			>
				{/* <div className={styles.overlay}> */}
				{src.split('/')[0] === 'video' ? (
					<video
						className={styles.video}
						preload={'auto'}
						autoPlay={true}
						loop={true}
						muted={'muted'}
					>
						<source src={src} type="video/mp4" />
					</video>
				) : (
					<div
						className={styles.image}
						style={{
							background: `url(${src})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center center',
							width: '500px',
							height: '500px',
						}}
					/>
				)}
				{/* </div> */}
				<h1>{text}</h1>
			</animated.div>
			<Waypoint bottomOffset="-100%" onEnter={() => toggle(true)} />
		</animated.div>
	)
}

Card.propTypes = {
	data: PropTypes.object.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
}

export default Card
