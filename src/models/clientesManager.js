import { Schema, model } from 'mongoose'

const collection = 'clientes'

const clientesSchema = new Schema({
    id: { type: Number, unique: true, },
    razonSocial: { type: String, unique: true, },
    cuit: { type: Number, unique: true },
    direccion: { type: String },
    telefono: { type: Number },
    email: { type: String, unique: true },
    presupuestos: [{
        id: { type: String, ref: 'presupuestos' }
    }]
}, {
    strict: 'throw',
    versionKey: false,
})

clientesSchema.pre('find', function (next) {
    this.populate.apply('presupuestos')
    next()
})

export const ClientesManager = model(collection, clientesSchema)