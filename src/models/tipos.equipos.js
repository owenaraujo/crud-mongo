import { Schema, model } from "mongoose";
const tipoEquipoSchema = new Schema(
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("TipoEquipos", tipoEquipoSchema);
