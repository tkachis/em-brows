import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styles from './ViewPager.module.css'

function ViewPager({ width, data }) {
	const index = useRef(0)
	const pages = data.filter(item => item.src.split('/')[0] !== 'video')

	const [props, set] = useSprings(pages.length, i => ({
		x: i * width,
		sc: 1,
		display: 'block',
	}))
	const bind = useGesture(
		({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
			if (down && distance > width / 2)
				cancel(
					(index.current = clamp(
						index.current + (xDir > 0 ? -1 : 1),
						0,
						pages.length - 1
					))
				)
			set(i => {
				if (i < index.current - 1 || i > index.current + 1)
					return { display: 'none' }
				const x = (i - index.current) * width + (down ? xDelta : 0)
				const sc = down ? 1 - distance / width / 2 : 1
				return { x, sc, display: 'block' }
			})
		}
	)
	return (
		<div className={styles.viewpager}>
			{props.map(({ x, display, sc }, i) => (
				<animated.div
					{...bind()}
					key={i}
					style={{
						display,
						transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
					}}
				>
					<animated.div
						className={styles.content}
						style={{
							backgroundImage: `url(${pages[i].src})`,
							transform: sc.interpolate(s => `scale(${s})`),
						}}
					/>
				</animated.div>
			))}
		</div>
	)
}

export default ViewPager
