var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Bank_controller = require('../controllers/Bank');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Bank', Bank_controller.Bank_create_post);
// DELETE request to delete Costume.
router.delete('/Bank/:id', Bank_controller.Bank_delete);
// PUT request to update Costume.
router.put('/Bank/:id', Bank_controller.Bank_update_put);
// GET request for one Costume.
router.get('/Bank/:id', Bank_controller.Bank_detail);
// GET request for list of all Costume items.
router.get('/Bank', Bank_controller.Bank_list);
module.exports = router;