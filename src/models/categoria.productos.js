import { Schema, model } from "mongoose";
const categoriaProductosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("categoriaProductos", categoriaProductosSchema);
