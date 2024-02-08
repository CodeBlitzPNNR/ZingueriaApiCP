import { Router } from "express";
import { getClientesController, getClientesControllerByName, getClientesControllerByCuit, postClientesController, deleteClientesController } from "../controllers/clientesController.js";

export const clienteRouter = Router()

clienteRouter.get('/test', (req, res) => {
    res.status(200).send('Client Router OK')
})
clienteRouter.get('/', getClientesController)
clienteRouter.get('/name/:razonSocial', getClientesControllerByName)
clienteRouter.get('/cuit/:cuit', getClientesControllerByCuit)
clienteRouter.post('/', postClientesController)
clienteRouter.delete('/delete/:razonSocial', deleteClientesController)