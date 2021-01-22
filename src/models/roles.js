import { model, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: String,
    status: { type: Boolean, default: true},

  },
  {
    versionKey: false,
  }
);
export default model("Roles", roleSchema);
