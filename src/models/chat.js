import { Schema, model } from "mongoose";
const chatSchema = new Schema({
  usuario_id:  { ref: "Usuarios", type: Schema.Types.ObjectId },
  mensaje:String,
expireAt: {
  type: Date,
  default: Date.now,
  index: { expires: 604800 },
},
},
{
  versionKey: false,
  timestamps: true,
},
);
export default model('Chat', chatSchema)
// import { Schema, model } from "mongoose";
// const chatSchema = new Schema({
//   usuarios: [{ ref: "Usuarios", type: Schema.Types.ObjectId }],

//   valor: { type: Boolean },

//   mensajes: [
//     {
//       mensaje: String,

//       user_id: { ref: "Usuarios", type: Schema.Types.ObjectId },
//     },
//   ],
// });
// export default model('Chat', chatSchema)
