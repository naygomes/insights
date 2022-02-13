const { Router } = require('express');
const CardController = require('../controllers/CardController');
const TagController = require('../controllers/TagController');
const router = Router();

router.get('/card/list',CardController.list);
router.get('/card/show/:id',CardController.show);
router.post('/card/create',CardController.create);
router.put('/card/update/:id', CardController.update);
router.delete('/card/delete/:id', CardController.destroy);


router.get('/tag/list',TagController.list);
router.get('/tag/show/:id',TagController.show);
router.post('/tag/create',TagController.create);
router.put('/tag/update/:id', TagController.update);
router.delete('/tag/delete/:id', TagController.destroy);

module.exports = router;

