import { Schema, model } from "mongoose";
const piezaSchema = new Schema(
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
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    subsistema: {
      type: String,
      required: true,
      trim: true,
    },
    equipo_id:  { ref: "Equipos", type: Schema.Types.ObjectId }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Piezas", piezaSchema);
