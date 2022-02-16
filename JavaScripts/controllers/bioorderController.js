"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bioorder = require('../models/bioorders');
exports.index = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};
// Display list of all Bioorders.
exports.bioorder_list = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder list');
};
// Display detail page for a specific Bioorder.
exports.bioorder_detail = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder detail: ' + req.params.id);
};
// Display Bioorder create form on GET.
exports.bioorder_create_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder create GET');
};
// Handle Bioorder create on POST.
exports.bioorder_create_post = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder create POST');
};
// Display Bioorder delete form on GET.
exports.bioorder_delete_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder delete GET');
};
// Handle Bioorder delete on POST.
exports.bioorder_delete_post = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder delete POST');
};
// Display Bioorder update form on GET.
exports.bioorder_update_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder update GET');
};
// Handle Bioorder update on POST.
exports.bioorder_update_post = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Bioorder update POST');
};
