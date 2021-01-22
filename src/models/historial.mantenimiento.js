import { Schema, model } from "mongoose";
const historialMantenimientoSchema = new Schema(
  {
    observacion: {
      type: String,
      required: true,
      trim: true,
    },
   mantenimiento_id:  { ref: "mantenimiento", type: Schema.Types.ObjectId },
   status: { type: Boolean, default: true},
    
    descripcion: {
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
export default model("HistorialMantenimiento", historialMantenimientoSchema);
