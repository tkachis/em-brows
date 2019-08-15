import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../../actions/auth'

import styles from './Login.module.css'

const Login = ({ isAuthenticated, login }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value })

	const onSubmit = async e => {
		e.preventDefault()
		login({ email, password })
		setFormData({ ...formData, email: '', password: '' })
	}

	if (isAuthenticated) {
		return <Redirect to="/portfolio" />
	}

	return (
		<section className={`${styles.login} container`}>
			<form onSubmit={e => onSubmit(e)} className={styles.form}>
				<input
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={e => onChange(e)}
				/>
				<input
					type="password"
					placeholder="Пароль"
					name="password"
					value={password}
					onChange={e => onChange(e)}
				/>
				<input type="submit" value="Войти" className={styles.btn} />
			</form>
		</section>
	)
}

Login.propTypes = {
	isAuthenticated: PropTypes.bool,
	login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
	mapStateToProps,
	{ login }
)(Login)
