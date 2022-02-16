"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Animal = require('../models/animal');
// Display list of all Animals.
exports.animal_list = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Animal list');
};
// Display detail page for a specific animal.
exports.animal_detail = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Animal detail: ' + req.params.id);
};
// There will be no operations allowed for adding or removing animals - the originals will remain the same.
