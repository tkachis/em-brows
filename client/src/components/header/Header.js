import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.link}>
				Em.brows
			</Link>
			<nav>
				<ul className={styles.ul}>
					<li>
						<Link to="/portfolio" className={styles.link}>
							Портфолио
						</Link>
					</li>
					<li>
						<Link to="/about" className={styles.link}>
							Обо мне
						</Link>
					</li>
					<li>
						<a href="#a" className={styles.link}>
							Запись
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
