import bcrypjs from "bcryptjs";
import { Schema, model } from "mongoose";
const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      
      trim: true,
    },
    documento: {
      type: String,
      required: true
    },
    roles: { ref: "Roles", type: Schema.Types.ObjectId },
    correo: {
      type: String,
      
      trim: true,
    },
    status: { type: Boolean, default: true},

    password: {
      type: String,
      
      trim: true,
    },
    
    username: {
      type: String,
      unique: true,
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
