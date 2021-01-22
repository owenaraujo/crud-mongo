import bcrypjs from "bcryptjs";
import { Schema, model } from "mongoose";
const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
      
      trim: true,
    },
    cedula: {
      type: String,
      
    },
    roles: { ref: "Roles", type: Schema.Types.ObjectId },
    correo: {
      type: String,
      
      trim: true,
    },
    status: { type: Boolean, default: false},

    password: {
      type: String,
      
      trim: true,
    },
    pregunta: {
      type: String,
      
      trim: true,
    },
    respuesta: {
      type: String,
      
      trim: true,
    },
    username: {
      type: String,
      
      trim: true,
    },
    token: {
      type: String,
    },
    nacionalidad: {
      type: String,
      
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
usuarioSchema.statics.encrypPassword = async (password) => {
  const salt = await bcrypjs.genSalt(10);
  return await bcrypjs.hash(password, salt);
};
usuarioSchema.statics.comparePassword = async (password, recivePassword) => {
  return await bcrypjs.compare(password, recivePassword);
};
export default model("Usuarios", usuarioSchema);
