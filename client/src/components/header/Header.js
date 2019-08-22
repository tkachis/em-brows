import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import { logout } from '../../actions/auth'

function NavLink(props) {
	return (
		<li>
			<Link {...props} className={styles.link} />
		</li>
	)
}

const Header = ({ isAuthenticated, logout }) => {
	return (
		<header className={`${styles.header} container`}>
			<Link to="/" className={`${styles.link} ${styles.logo}`}>
				Em.brows
			</Link>
			<nav>
				<ul className={styles.ul}>
					<NavLink to="/portfolio">Портфолио</NavLink>

					<NavLink to="/contacts">Контакты</NavLink>

					<NavLink to="/about">Обо мне</NavLink>

					{isAuthenticated && (
						<li>
							<button className={styles.link} onClick={() => logout()}>
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
