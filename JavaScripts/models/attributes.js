"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AttributeSchema = new mongoose_1.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 60 },
});
// virtual attribute's url
AttributeSchema.virtual("url").get(function () {
    return "/catalog/attribute/" + this._id;
});
module.exports = (0, mongoose_1.model)("Attributes", AttributeSchema);
