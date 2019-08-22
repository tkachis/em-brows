import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import { logout } from '../../actions/auth'

function NavLink(props) {
	return (
		<li>
			<Link {...props} />
		</li>
	)
}

const Header = ({ isAuthenticated, logout }) => {
	return (
		<header className={`${styles.header} container`}>
			<Link to="/" className={styles.link}>
				Em.brows
			</Link>
			<nav>
				<ul className={styles.ul}>
					<NavLink to="/portfolio" className={styles.link}>
						Портфолио
					</NavLink>

					<NavLink to="/contacts" className={styles.link}>
						Контакты
					</NavLink>

					<NavLink to="/about" className={styles.link}>
						Обо мне
					</NavLink>

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
