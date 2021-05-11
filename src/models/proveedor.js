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
    status: { type: Boolean, default: true},

   
    
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    
    rif: {
      type: String,

      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Proveedor", proveedorSchema);
