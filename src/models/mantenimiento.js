import { Schema, model } from "mongoose";
const mantenimientoSchema = new Schema(
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
    tipo:  { ref: "TipoEquipos", type: Schema.Types.ObjectId },
    frecuencia: {
      type: String,
      required: true,
      trim: true,
    },
    pieza_id:  { ref: "Piezas", type: Schema.Types.ObjectId },
    equipo_id:  { ref: "Equipos", type: Schema.Types.ObjectId },
    Historial:  { ref: "HistorialMantenimiento", type: Schema.Types.ObjectId },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("mantenimiento", mantenimientoSchema);
