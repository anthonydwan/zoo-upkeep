"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let AnimalSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "are you sure that's the name of animal?"],
        maxlength: 60,
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Bioorder",
        required: true,
    },
    attributes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Attributes" }],
});
// Virtual for animal's url
AnimalSchema.virtual("url").get(function () {
    return "/catalog/animal/" + this._id;
});
module.exports = (0, mongoose_1.model)("Animal", AnimalSchema);
