const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome, this is the Playset-api!'));

router.get('/cards', controllers.findAllCards);

router.post('/cards', controllers.createCard);

router.get('/cards/:id', controllers.findCardById);

router.put('/cards/:id', controllers.updateCardById);

router.delete('/cards/:id', controllers.deleteCardById);

module.exports = router;