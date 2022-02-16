var express = require('express');
var router = express.Router();

// Require controller modules.
var animal_controller = require('../controllers/animalController');
var animal_instance_controller = require('../controllers/animalinstanceController');
var attribute_controller = require('../controllers/attributesController');
var bioorder_controller = require('../controllers/bioorderController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', animal_controller.index);

// GET request for list of all animal species.
router.get('/animals', animal_controller.animal_list);

/// bioorder ROUTES ///

// GET request for one bioorder.
router.get('/category/:id', bioorder_controller.bioorder_detail);

// GET request for list of all bioorders.
router.get('/categoriess', bioorder_controller.bioorder_list);

/// attributes ROUTES ///

// GET request for creating a attributes. NOTE This must come before route that displays attributes (uses id).
router.get('/attributes/create', attribute_controller.attribute_create_get);

//POST request for creating attributes.
router.post('/attributes/create', attribute_controller.attribute_create_post);

// GET request to delete attributes.
router.get('/attributes/:id/delete', attribute_controller.attribute_delete_get);

// POST request to delete attributes.
router.post(
  '/attributes/:id/delete',
  attribute_controller.attribute_delete_post
);

// GET request to update attributes.
router.get('/attributes/:id/update', attribute_controller.attribute_update_get);

// POST request to update attributes.
router.post(
  '/attributes/:id/update',
  attribute_controller.attribute_update_post
);

// GET request for one attributes.
router.get('/attributes/:id', attribute_controller.attribute_detail);

// GET request for list of all attributes.
router.get('/attributess', attribute_controller.attribute_list);

/// animalinstance ROUTES ///

// GET request for creating a animalinstance. NOTE This must come before route that displays animalinstance (uses id).
router.get(
  '/animalinstance/create',
  animal_instance_controller.animalinstance_create_get
);

// POST request for creating animalinstance.
router.post(
  '/animalinstance/create',
  animal_instance_controller.animalinstance_create_post
);

// GET request to delete animalinstance.
router.get(
  '/animalinstance/:id/delete',
  animal_instance_controller.animalinstance_delete_get
);

// POST request to delete animalinstance.
router.post(
  '/animalinstance/:id/delete',
  animal_instance_controller.animalinstance_delete_post
);

// GET request to update animalinstance.
router.get(
  '/animalinstance/:id/update',
  animal_instance_controller.animalinstance_update_get
);

// POST request to update animalinstance.
router.post(
  '/animalinstance/:id/update',
  animal_instance_controller.animalinstance_update_post
);

// GET request for one animalinstance.
router.get(
  '/animalinstance/:id',
  animal_instance_controller.animalinstance_detail
);

// GET request for list of all animalinstance.
router.get('/animalinstances', animal_instance_controller.animalinstance_list);

module.exports = router;
