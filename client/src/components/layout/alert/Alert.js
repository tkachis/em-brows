import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Alert.module.css'

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map(alert => (
		<div
			key={alert.id}
			className={`${styles.alert} ${styles[alert.alertType]}`}
		>
			{alert.msg}
		</div>
	))

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	alerts: state.alert,
})

export default connect(
	mapStateToProps,
	{}
)(Alert)
