const { getCardByName, getCardById } = require('./apiProxy');
const {
    createCard,
    findAllCards,
    findCardById,
    updateCardById,
    deleteCardById
} = require('./cards');

module.exports = {
    createCard,
    findAllCards,
    findCardById,
    updateCardById,
    deleteCardById,
    getCardByName,
    getCardById
}