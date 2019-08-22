import React from 'react'
import { animated, useSpring } from 'react-spring'

import styles from './About.module.css'

const About = () => {
	const { o, x } = useSpring({
		from: { o: 0, x: 100 },
		to: { o: 1, x: 0 },
	})

	return (
		<section className={`${styles.about} container`}>
			<div>
				<animated.div
					className={`${styles.image} ${styles.image1}`}
					style={{
						transform: x.interpolate(x => `translate3d(-${x}%, 0, 0)`),
						opacity: o,
					}}
				/>
				<div>
					<h1>
						My
						<br /> Studio
					</h1>
					<p>
						Привет! Меня зовут Эмма и я Brow-мастер. В своей работе я
						придерживаюсь эстетики натуральных образов - люблю естественность и
						легкость. Меня зовут Эмма и я Brow-мастер. В своей работе я
						придерживаюсь эстетики натуральных образов - люблю естественность и
						легкость.
					</p>
				</div>
			</div>
			<div>
				<div>
					<h1>
						Emma
						<br /> Tkacheva
					</h1>
					<p>
						Привет! Меня зовут Эмма и я Brow-мастер. В своей работе я
						придерживаюсь эстетики натуральных образов - люблю естественность и
						легкость. Меня зовут Эмма и я Brow-мастер. В своей работе я
						придерживаюсь эстетики натуральных образов - люблю естественность и
						легкость.
					</p>
				</div>

				<animated.div
					className={`${styles.image} ${styles.image2}`}
					style={{
						transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`),
						opacity: o,
					}}
				/>
			</div>
		</section>
	)
}

export default About
