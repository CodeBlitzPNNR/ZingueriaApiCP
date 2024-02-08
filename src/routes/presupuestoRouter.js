import { Router } from "express";
import { getPresupuestosControllers, postPresupuestosController, getPresupuestosControllerByID } from "../controllers/presupuestosControllers.js";

export const presupuestoRouter = Router()

presupuestoRouter.get('/test', (req, res) => {
    res.status(200).send('Presupuesto Router OK')
})
presupuestoRouter.get('/', getPresupuestosControllers)
presupuestoRouter.get('/:id', getPresupuestosControllerByID)
presupuestoRouter.post('/', postPresupuestosController)