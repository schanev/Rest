const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.pizza.get);
router.get('/:id', controllers.pizza.getById);

module.exports = router;