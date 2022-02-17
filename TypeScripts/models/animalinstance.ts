import { Schema, model} from "mongoose";
import { AnimalinstanceDocument } from "./modelTypes";

const AnimalinstanceSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, required: true, ref: "Animal" },
  name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  description: {
    type: String,
    required: true,
    minlength: [3, "Tell more about this animal"],
  },
});

// Virtual for animal instance's url
AnimalinstanceSchema.virtual("url").get(function (
  this: AnimalinstanceDocument
) {
  return "/catalog/animalinstance/" + this._id;
});

module.exports = model<AnimalinstanceDocument>(
  "Animalinstance",
  AnimalinstanceSchema
);
