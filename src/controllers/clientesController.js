import { ClientesManager } from "../mongodb/mongodb.js";

export async function getClientesController(req, res) {
    try {
        const clientes = await ClientesManager.find()
        res.status(302).json({ payload: clientes })
    } catch {
        res.status(404).json({
            message: error.message
        })
    }
}

export async function getClientesControllerByName(req, res) {
    const { razonSocial } = req.params
    try {
        const cliente = await ClientesManager.findOne({ razonSocial: `${razonSocial}` })
        if (!cliente) {
            res.status(404).json({
                message: 'Persona o Razon Social no encontrada'
            })
        } else {
            res.status(302).json({ payload: cliente })
        }
    } catch {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function getClientesControllerByCuit(req, res) {
    const { cuit } = req.params

    try {
        const cliente = await ClientesManager.findOne({ cuit: cuit })
        if (!cliente) {
            res.status(404).json({
                message: 'Persona o Razon Social no encontrada'
            })
        } else {
            res.status(302).json({ payload: cliente })
        }
    } catch {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function postClientesController(req, res) {
    const { razonSocial, cuit, direccion, telefono, email, presupuestos } = req.body
    try {
        const id = await ClientesManager.countDocuments() + 1
        const cliente = await ClientesManager.create({ id, razonSocial, cuit, direccion, telefono, email, presupuestos })
        console.log(cliente)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function deleteClientesController(req, res) {
    const { razonSocial } = req.params
    console.log(razonSocial)
    try {
        const cliente = await ClientesManager.deleteOne({ razonSocial: `${razonSocial}` })
        if (cliente.deletedCount === 0) {
            return res.status(404).json({
                message: 'Cliente no encontrado'
            });
        }
        console.log(cliente)
        res.json({
            message: 'Cliente eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}