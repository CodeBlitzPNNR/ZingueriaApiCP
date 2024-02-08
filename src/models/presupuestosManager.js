import { Schema, model, mongoose } from 'mongoose';

const collection = 'presupuestos';

const presupuestosSchema = new Schema({
    id: { type: Number, unique: true },
    razonSocial: { type: String },
    detalle: [{
        codigo: { type: Number },
        detalle: { type: String },
        montoTotal: { type: Number }
    }]
}, {
    strict: 'throw',
    versionKey: false,
    static: {},
    methods: {}
});

export const PresupuestosManager = model(collection, presupuestosSchema);