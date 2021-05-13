import { Schema, model } from "mongoose";
const DolarSchema = new Schema(
  {
    valor: {
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
export default model("Dolar", DolarSchema);
