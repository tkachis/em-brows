const express = require('express')

const connectDB = require('./config/db')

const app = express()

connectDB()

// parse application/json
app.use(express.json({ extended: false }))

// static

// routes
app.use('/api/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`App listening on port: ${PORT}`)
})
