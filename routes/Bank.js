var express = require('express');
var passport = require('passport');
const Bank_controller= require('../controllers/Bank');
var router = express.Router();

 
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Bank', { title: 'Search Result Banks' });
// });
router.get('/', Bank_controller.Bank_view_all_Page);

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
    
module.exports = router;

/* GET detail Bank page */
router.get('/detail', Bank_controller.Bank_view_one_Page);

/* GET create Bank page */
router.get('/create', secured, Bank_controller.Bank_create_Page);

/* GET create update page */
router.get('/update', secured, Bank_controller.Bank_update_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

/* GET delete Bank page */
router.get('/delete', secured, Bank_controller.Bank_delete_Page);
