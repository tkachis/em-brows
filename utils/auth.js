const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
	const token = req.header('x-auth-token')

	if (!token) {
		return res.status(401).json({ msg: 'Нет токена, действие отклонено' })
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecretKey'))
		req.user = decoded.user

		next()
	} catch (err) {
		res.status(401).json({ msg: 'Невалидный токен' })
	}
}
