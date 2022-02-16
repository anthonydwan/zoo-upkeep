import { Schema, model } from "mongoose";
import { bioList, BioorderDocument } from "./modelTypes";

// interface BioorderType extends Document {
// 	name: bioList;
// 	url: String;
// }

const BioorderSchema = new Schema({
  name: { type: String, enum: bioList, required: true },
});

// virtual attribute's url
BioorderSchema.virtual("url").get(function (this: BioorderDocument) {
  return "/catalog/attribute/" + this._id;
});

module.exports = model<BioorderDocument>("Bioorder", BioorderSchema);
