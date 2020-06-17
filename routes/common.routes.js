const router = require('express').Router();
const CommonController = require('../controllers/common.controller');

router.get('/', CommonController.index);
router.get('*', CommonController.not_found);

module.exports = router;
