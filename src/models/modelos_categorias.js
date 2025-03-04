import { Schema, model } from "mongoose";
const modelos = new Schema(
  {
    marca:String,
    modelo: String ,
    codename: String,
    sku: String,
    sku_2: String,
    categoria:{ ref: "categoria_vidrio", type: Schema.Types.ObjectId },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("modelos", modelos);