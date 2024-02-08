import { Router } from 'express'
import { clienteRouter } from './clientRouter.js'
import { presupuestoRouter } from './presupuestoRouter.js'

export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
    res.send('Funciona!')
})

apiRouter.use('/clientes', clienteRouter)
apiRouter.use('/presupuestos', presupuestoRouter)