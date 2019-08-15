import React from 'react'

import styles from './About.module.css'

const About = props => {
	return (
		<section className={`${styles.about} container`}>
			<div>
				<div className={`${styles.image} ${styles.image1}`} />

				<h1>My Studio</h1>
				<p>
					Привет! Меня зовут Эмма и я Brow-мастер. В своей работе я
					придерживаюсь эстетики натуральных образов - люблю естественность и
					легкость. Меня зовут Эмма и я Brow-мастер. В своей работе я
					придерживаюсь эстетики натуральных образов - люблю естественность и
					легкость.
				</p>
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

				<div className={`${styles.image} ${styles.image2}`} />
			</div>
		</section>
	)
}

export default About
