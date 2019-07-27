const express = require('express')
const path = require('path')
const config = require('config')
const mkdirp = require('mkdirp')
const multer = require('multer')
const Sharp = require('sharp')
const rimraf = require('rimraf')

// добавляем свой кастомный DiskStorage,
// чтобы встроить обработку фотографий
const DiskStorage = require('../../utils/DiskStorage')
const Image = require('../../models/Image')
const auth = require('../../utils/auth')

const router = express.Router()

const rs = () =>
	Math.random()
		.toString(36)
		.slice(-3)

const storage = DiskStorage({
	destination: (req, file, cb) => {
		const dir = `${rs()}/${rs()}`

		req.dir = dir

		mkdirp(`${config.get('destination')}/${dir}`, err =>
			cb(err, `${config.get('destination')}/${dir}`)
		)
	},
	filename: (req, file, cb) => {
		const fileName = Date.now() + path.extname(file.originalname)

		req.fileName = fileName

		cb(null, fileName)
	},
	sharp: (req, file, cb) => {
		const resizer = Sharp()
			.resize(1024, 768)
			.max()
			.withoutEnlargement()
			.toFormat('jpg')
			.jpeg({
				quality: 80,
				progressive: true,
			})

		cb(null, resizer)
	},
})

const upload = multer({
	storage,
	limits: { fileSize: 10 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		const ext = path.extname(file.originalname)
		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
			const err = new Error('Extencion')
			err.code = 'EXTENTION'
			return cb(err)
		}
		cb(null, true)
	},
}).single('file')

router.post('/', auth, (req, res) => {
	upload(req, res, async err => {
		let msg = ''
		let error = false

		if (err) {
			error = true
			if (err.code === 'LIMIT_FILE_SIZE') {
				msg = 'Загрузите изображение менее 10mb'

				rimraf(
					path.join(appRoot, config.get('destination'), req.dir.split('/')[0]),
					err => {
						if (err) {
							console.log('Не удалось удалить файл')
						}
						console.log(`Файлы удалены`)
					}
				)
			}
			if (err.code === 'EXTENTION') {
				msg = 'Файл должен иметь расширение jpeg или png'
			}
		} else {
			const image = new Image({
				path: `/${req.dir}/${req.fileName}`,
			})

			await image.save()

			msg = 'Изображение успешно загружено'
		}

		res.json({
			error,
			msg,
		})
	})
})

module.exports = router
