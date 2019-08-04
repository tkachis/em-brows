const express = require('express')
const path = require('path')
const rimraf = require('rimraf')
const config = require('config')

const router = express.Router()

const Image = require('../../models/Image')
const User = require('../../models/User')
const auth = require('../../utils/auth')

// @route         GET api/image
// @description   Получение всех изображений
// @access        Public
router.get('/', async (req, res) => {
	try {
		const images = await Image.find().sort({ date: -1 })

		res.json(images)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Ошибка сервера')
	}
})

// @route         DELETE api/image/:id
// @description   Удаление изображения по id
// @access        Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const image = await Image.findById(req.params.id)
		const user = await User.findById(req.user.id).select('-password')

		if (!image) {
			return res.status(404).json({ msg: 'Изображение не доступно' })
		}

		if (!user.isAdmin) {
			return res.status(404).json({ msg: 'У вас нет доступа' })
		}

		rimraf(
			path.join(appRoot, config.get('destination'), image.path.split('/')[1]),
			err => {
				if (err) {
					return res.status(404).json({ msg: 'Не удалось удалить Изображение' })
				}
			}
		)

		await image.remove()

		res.json({ msg: 'Изображение удалено' })
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Ошибка сервера')
	}
})

module.exports = router
