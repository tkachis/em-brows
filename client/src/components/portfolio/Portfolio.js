import React from 'react'

import Gallery from './gallery/Gallery'

import styles from './Portfolio.module.css'

const Portfolio = () => {
	return (
		<div className={styles.portfolio}>
			<h1>
				Исследуй мою галлерею потрясающих <span>бровей</span>
			</h1>
			<Gallery />
		</div>
	)
}

export default Portfolio
