import cors from 'cors'
import express, { json } from 'express'
import { SERVER_PORT } from './config/env'

const app = express()

app.use(json())
app.use(cors())

app.get('/', (_, res) => {
	res.status(200).json({ message: 'Hello, world!' })
})

app.listen(SERVER_PORT, () => {
	console.log(`Listening on http://localhost:${SERVER_PORT}`)
})
