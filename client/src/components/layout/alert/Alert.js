import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { animated, useTransition } from 'react-spring'

import styles from './Alert.module.css'

const Alert = ({ alerts }) => {
	const alertsAnimation = useTransition(alerts, alert => alert.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})
	return (
		<div className={styles.wrapper}>
			{alerts !== null &&
				alerts.length > 0 &&
				alertsAnimation.map(({ item, props: animation }) => (
					<animated.div
						key={item.id}
						className={`${styles.alert} ${styles[item.alertType]}`}
						style={animation}
					>
						{item.msg}
					</animated.div>
				))}
		</div>
	)
}

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
