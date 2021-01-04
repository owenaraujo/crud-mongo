import { model, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);
export default model("Roles", roleSchema);
