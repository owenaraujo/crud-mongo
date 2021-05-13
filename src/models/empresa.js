import { Schema, model } from "mongoose";
const empresaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
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
export default model("Empresa", empresaSchema);
