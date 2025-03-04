import { Schema, model } from "mongoose";
const categoria_vidrio = new Schema(
  {
    color: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("categoria_vidrio", categoria_vidrio);