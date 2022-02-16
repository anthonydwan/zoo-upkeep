let Animal = require('../models/animal');
import { Request, Response, NextFunction } from 'express';

// Display list of all Animals.
exports.animal_list = (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Animal list');
};

// Display detail page for a specific animal.
exports.animal_detail = (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Animal detail: ' + req.params.id);
};

// There will be no operations allowed for adding or removing animals - the originals will remain the same.
