import React from 'react'

import Card from './card/Card'
import ViewPager from './viewPager/ViewPager'
import getCardData from '../../helpers/getCardData'
import useWindowDimensions from '../../helpers/useWindowDimensions'

import styles from './Landing.module.css'

const Landing = () => {
	const { width, height } = useWindowDimensions()

	return (
		<section className={styles.landing}>
			{width <= 900 ? (
				<ViewPager data={getCardData()} width={width} />
			) : (
				<div className={`${styles.gallery} ${'container'}`}>
					{getCardData().map(data => (
						<Card key={data.src} data={data} width={width} height={height} />
					))}
				</div>
			)}
		</section>
	)
}

export default Landing
