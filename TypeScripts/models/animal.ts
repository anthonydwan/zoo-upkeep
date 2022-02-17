import { Schema, model } from "mongoose";
import { AnimalDocument, animalList } from "./modelTypes";

let AnimalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "are you sure that's the name of animal?"],
    maxlength: 60,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Bioorder",
    required: true,
  },
  attributes: [{ type: Schema.Types.ObjectId, ref: "Attributes" }],
});

// Virtual for animal's url
AnimalSchema.virtual("url").get(function (this: AnimalDocument) {
  return "/catalog/animal/" + this._id;
});

module.exports = model<AnimalDocument>("Animal", AnimalSchema);
