const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const createConnection = require('./database/database')

const apiRouter = require('./routes/api')

app.use('/api/uploads', express.static(path.resolve(__dirname, './uploads')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/api', apiRouter)
app.get('/api', (_, res) => {
	res.status(200).send('POSTS_API')
})

createConnection()
	.then(() => {
		app.listen(PORT, () => console.log('Server has been started...'))
	})
	.catch(err => console.log('Error: ', JSON.stringify(err)))