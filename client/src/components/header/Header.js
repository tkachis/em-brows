import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import { logout } from '../../actions/auth'

const Header = ({ isAuthenticated, logout }) => {
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
					{isAuthenticated && (
						<li>
							<button className={styles.exit} onClick={() => logout()}>
								Выйти
							</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
	mapStateToProps,
	{ logout }
)(Header)
