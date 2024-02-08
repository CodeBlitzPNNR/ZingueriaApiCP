import { PresupuestosManager } from '../mongodb/mongodb.js'


export async function getPresupuestosControllers(req, res) {
    try {
        const baseDatos = await PresupuestosManager.find()
        res.status(302).json({ payload: baseDatos })
    } catch {
        res.status(404).json({
            message: error.message
        })
    }
}

export async function getPresupuestosControllerByID(req, res) {
    const { id } = req.params
    try {
        const presupuesto = await PresupuestosManager.findOne({ id: id })
        if (!presupuesto) {
            res.status(404).json({
                message: `Presupuesto con numero de id ${id} no encontrado`
            })
        } else {
            res.status(302).json({ payload: presupuesto })
        }
    } catch {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function postPresupuestosController(req, res) {
    const { razonSocial, detalle } = req.body
    try {
        const id = await PresupuestosManager.countDocuments() + 1
        const presupuesto = await PresupuestosManager.create({ id, razonSocial, detalle })
        console.log(presupuesto)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}