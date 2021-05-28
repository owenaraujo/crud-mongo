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
      unique: true,
      
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
    unidadMedida: { ref: "Unidades", type: Schema.Types.ObjectId },
    cantidad: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    default: true,
  

    },
    alerta: {
      type: String,
    default: null,
  

    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("producto", productoSchema);
