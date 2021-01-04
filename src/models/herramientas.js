import { Schema, model } from "mongoose";
const herramientasSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    tipo: {
      type: String,

      trim: true,
    },
    cantidad: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("herramienta", herramientasSchema);
