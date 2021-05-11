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
    categoria: { ref: "categoriaProductos", type: Schema.Types.ObjectId }
    ,
    stock: { type: Number},

    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    proveedor_id: { ref: "Proveedor", type: Schema.Types.ObjectId },
    unidadMedida: {
      type: String,
      required: true,
      trim: true,
    },
    cantidad: {
      type: Number,
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("producto", productoSchema);
