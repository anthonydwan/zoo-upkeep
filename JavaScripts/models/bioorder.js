"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const modelTypes_1 = require("./modelTypes");
// interface BioorderType extends Document {
// 	name: bioList;
// 	url: String;
// }
const BioorderSchema = new mongoose_1.Schema({
    name: { type: String, enum: modelTypes_1.bioList, required: true },
});
// virtual attribute's url
BioorderSchema.virtual("url").get(function () {
    return "/catalog/attribute/" + this._id;
});
module.exports = (0, mongoose_1.model)("Bioorder", BioorderSchema);
