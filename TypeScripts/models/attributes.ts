import { Schema, model } from "mongoose";
import { AttributeDocument } from "./modelTypes";

const AttributeSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 60 },
});

// virtual attribute's url
AttributeSchema.virtual("url").get(function (this: AttributeDocument) {
  return "/catalog/attribute/" + this._id;
});

module.exports = model<AttributeDocument>("Attributes", AttributeSchema);
