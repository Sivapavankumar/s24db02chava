var express = require('express');
const Bank_controller= require('../controllers/Bank');
var router = express.Router();

 
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Bank', { title: 'Search Result Banks' });
// });
router.get('/', Bank_controller.Bank_view_all_Page);
module.exports = router;

/* GET detail Bank page */
router.get('/detail', Bank_controller.Bank_view_one_Page);

/* GET create Bank page */
router.get('/create', Bank_controller.Bank_create_Page);

/* GET create update page */
router.get('/update', Bank_controller.Bank_update_Page);

/* GET delete Bank page */
router.get('/delete', Bank_controller.Bank_delete_Page);
