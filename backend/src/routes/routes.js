const { Router } = require('express');
const CardController = require('../controllers/CardController');
const router = Router();

router.get('/card/list',CardController.list);
router.get('/card/show/:id',CardController.show);
router.post('/card/create',CardController.create);
router.put('/card/update/:id', CardController.update);
router.delete('/card/delete/:id', CardController.destroy);

module.exports = router;

