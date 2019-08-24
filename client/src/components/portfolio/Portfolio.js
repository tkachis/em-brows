import React from 'react'

import Gallery from './gallery/Gallery'

import styles from './Portfolio.module.css'

const Portfolio = () => {
	return (
		<section className={`${styles.portfolio} container`}>
			<h1>
				Исследуй мою галерею потрясающих <span>бровей</span>
			</h1>
			<Gallery />
		</section>
	)
}

export default Portfolio
