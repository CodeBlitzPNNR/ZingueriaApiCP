import express from "express";
import { PORT } from "./utils/config/config.js"
import { apiRouter } from "./routes/apiRouter.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => {
    console.log(`Servidor conectado en puerto: ${PORT} (LocalHost)`)
})

app.get('/', (req, res) => {
    res.send('Api funcionando OK')
})
app.use('/api', apiRouter)