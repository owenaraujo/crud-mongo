import { Schema, model } from "mongoose";
const productoSchema = new Schema(
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
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    precioLote: {
      type: Number,
      required: true,
      trim: true,
    },
    precioMin: {
      type: Number,
      required: true,
      trim: true,
    },
    proveedor_id: {
      type: String,
      required: true,
      trim: true,
    },
    unidadMedida: {
      type: String,
      required: true,
      trim: true,
    },
    cantidad: {
      type: String,
      required: true,
      trim: true,
    },
    imgUrl: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("producto", productoSchema);
