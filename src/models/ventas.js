import { Schema, model } from "mongoose";
const ventaSchema = new Schema(
  {
    dolar: Number ,
    total: Number,
    productos: [
        {
            
            cantidad: Number,
            precio:Number,
            id_producto: { ref: "producto", type: Schema.Types.ObjectId }
            
          }
    ]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Ventas", ventaSchema);
