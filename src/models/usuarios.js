import bcrypjs from "bcryptjs";
import { Schema, model } from "mongoose";
const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    cedula: {
      type: String,
      required: true,
    },
    roles: { ref: "Roles", type: Schema.Types.ObjectId },
    correo: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    pregunta: {
      type: String,
      required: true,
      trim: true,
    },
    respuesta: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
    },
    nacionalidad: {
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
usuarioSchema.statics.encrypPassword = async (password) => {
  const salt = await bcrypjs.genSalt(10);
  return await bcrypjs.hash(password, salt);
};
usuarioSchema.statics.comparePassword = async (password, recivePassword) => {
  return await bcrypjs.compare(password, recivePassword);
};
export default model("Usuarios", usuarioSchema);
