import { Schema, model } from "mongoose";
const nacionalidadSchema = new Schema(
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("nacionalidad", nacionalidadSchema);
