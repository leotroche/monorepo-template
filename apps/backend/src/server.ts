import { app } from './app'
import { SERVER_PORT } from './config/env'

app.listen(SERVER_PORT, () => {
	console.log(`Listening on http://localhost:${SERVER_PORT}`)
})
