const { response } = require('express');
const fetch = require('node-fetch');

const getCardByName = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`);
        const {cards} = await response.json();
        if (cards.length) {
            return res.status(200).send(cards)
        }

        return res.status(404).send(`No cards where found with the name ${name.split('+').join(' ')}`);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getCardById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
        const {card} = await response.json();
        if (card) {
            return res.status(200).send(card)
        }

        return res.status(404).send(`No cards where found with the ID: ${id}`);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getCardByName,
    getCardById
}