import { Schema, model } from "mongoose";
const proveedorSchema = new Schema(
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
    correo: {
      type: String,

      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,

      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("proveedor", proveedorSchema);
