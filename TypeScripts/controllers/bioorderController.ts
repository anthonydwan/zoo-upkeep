var Bioorder = require('../models/bioorders');
import { Request, Response, NextFunction } from 'express';

exports.index = (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Bioorders.
exports.bioorder_list = (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Bioorder list');
};

// Display detail page for a specific Bioorder.
exports.bioorder_detail = (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Bioorder detail: ' + req.params.id);
};

// Display Bioorder create form on GET.
exports.bioorder_create_get = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder create GET');
};

// Handle Bioorder create on POST.
exports.bioorder_create_post = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder create POST');
};

// Display Bioorder delete form on GET.
exports.bioorder_delete_get = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder delete GET');
};

// Handle Bioorder delete on POST.
exports.bioorder_delete_post = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder delete POST');
};

// Display Bioorder update form on GET.
exports.bioorder_update_get = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder update GET');
};

// Handle Bioorder update on POST.
exports.bioorder_update_post = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send('NOT IMPLEMENTED: Bioorder update POST');
};
