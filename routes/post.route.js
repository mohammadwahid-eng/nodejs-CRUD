const router = require('express').Router();
const PostController = require('../controllers/post.controller');

router.get('/', PostController.index);
router.get('/create', PostController.create);
router.post('/store', PostController.store);
router.get('/:id/show', PostController.show);
router.get('/:id/edit', PostController.edit);
router.put('/:id/update', PostController.update);
router.delete('/:id/delete', PostController.destroy);

module.exports = router;
