import { Schema, model } from "mongoose";
const equiposSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    status: { type: Boolean, default: true},

    codigo: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    serial: {
      type: String,

      trim: true,
    },
    marca: {
      type: String,

      trim: true,
    },
    modelo: {
      type: String,

      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    observacion: {
      type: String,

      trim: true,
    },
    piezas: [{ ref: "Piezas", type: Schema.Types.ObjectId }],
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Equipos", equiposSchema);
