import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={`${styles.footer} container`}>
			<h2>Emma Tkacheva</h2>
			<p>Copyright &copy; 2019, All Rights Reserved</p>
			<ul>
				<li>
					<a href="https://www.instagram.com/em.brows/" target={'_blank'}>
						<i className="fab fa-instagram fa-lg" />
					</a>
				</li>
				<li>
					<a href="https://vk.com/martirosova" target={'_blank'}>
						<i className="fab fa-vk fa-lg" />
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
