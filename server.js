const express = require('express')
const path = require('path')
const config = require('config')

const connectDB = require('./config/db')

const app = express()

// path to root directory
global.appRoot = path.resolve(__dirname)

connectDB()

// parse application/json
app.use(express.json({ extended: false }))

// routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/upload', require('./routes/api/upload'))
app.use('/api/image', require('./routes/api/image'))

// static
app.use(
	'/uploads',
	express.static(path.join(__dirname, config.get('destination')))
)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`App listening on port: ${PORT}`)
})
