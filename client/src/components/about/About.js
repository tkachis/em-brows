import React from 'react'

import styles from './About.module.css'

const About = props => {
	return (
		<div className={styles.about}>
			<div className={styles.image}>
				{/* <img
					src="./img/about.jpg"
					alt="Emma Tkacheva"
					className={styles.image}
				/> */}
			</div>

			<div className={styles.info}>
				<h1>
					Эмма
					<br /> Ткачева
				</h1>
				<p>
					Привет! Меня зовут Эмма и я Brow-мастер. В своей работе я
					придерживаюсь эстетики натуральных образов - люблю естественность и
					легкость. Меня зовут Эмма и я Brow-мастер. В своей работе я
					придерживаюсь эстетики натуральных образов - люблю естественность и
					легкость.
				</p>

				<ul className={styles.contacts}>
					<li>
						<a href="#a">Instagram</a>
					</li>
					<li>
						<a href="#a">Vkontakte</a>
					</li>
					<li>
						<a href="#a">WhatsApp</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default About
