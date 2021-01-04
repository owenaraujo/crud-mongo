import { Schema, model } from "mongoose";
const nacionalidadSchema = new Schema(
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
export default model("nacionalidad", nacionalidadSchema);
