"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AnimalinstanceSchema = new mongoose_1.Schema({
    animal: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Animal" },
    name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    description: {
        type: String,
        required: true,
        minlength: [3, "Tell more about this animal"],
    },
});
// Virtual for animal instance's url
AnimalinstanceSchema.virtual("url").get(function () {
    return "/catalog/animalinstance/" + this._id;
});
module.exports = (0, mongoose_1.model)("Animalinstance", AnimalinstanceSchema);
