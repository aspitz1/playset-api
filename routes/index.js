const { Router } = require('express');
const controllers = require('../controllers');
const redis = require('../middleware/redis');
const router = Router();

router.get('/', (req, res) => res.send('Welcome, this is the Playset-api!'));

router.get('/cards', controllers.findAllCards);

router.post('/cards', controllers.createCard);

router.get('/cards/:id', controllers.findCardById);

router.put('/cards/:id', controllers.updateCardById);

router.delete('/cards/:id', controllers.deleteCardById);

router.get('/proxy/cards/:name', redis, controllers.getCardByName);

router.get('/proxy/card/:id', redis, controllers.getCardById);

module.exports = router;