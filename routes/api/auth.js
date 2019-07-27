const express = require('express')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

const User = require('../../models/User')

// @route         POST api/auth
// @description   Авторизация пользователя + получение токена
// @access        Public
router.post(
	'/',
	[
		check('email', 'Пожалуйста, введите валидный email').isEmail(),
		check('password', 'Пожалуйста, введите пароль').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { email, password } = req.body

		try {
			// Проверим, что пользователь существует
			let user = await User.findOne({ email })

			if (!user) {
				res.status(400).json({ errors: [{ msg: 'Неверные учетные данные' }] })
			}

			// Проверим пароль
			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				res.status(400).json({ errors: [{ msg: 'Неверные учетные данные' }] })
			}

			// Вернем токен
			const payload = {
				user: {
					id: user.id,
				},
			}

			jwt.sign(
				payload,
				config.get('jwtSecretKey'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err
					res.json({ token })
				}
			)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Ошибка сервера')
		}
	}
)

module.exports = router
