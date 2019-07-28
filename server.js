const express = require('express')
const path = require('path')

const connectDB = require('./config/db')

const app = express()

// путь в корневую дирректорию
global.appRoot = path.resolve(__dirname)

connectDB()

// parse application/json
app.use(express.json({ extended: false }))

// static

// routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/upload', require('./routes/api/upload'))
app.use('/api/image', require('./routes/api/image'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`App listening on port: ${PORT}`)
})
