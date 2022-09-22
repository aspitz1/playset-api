const { response } = require('express');
const { Card } = require('../models');

const createCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        return res.status(201).json({ card });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const findAllCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        return res.status(200).json({ cards });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const findCardById = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findOne({ where: {id: id} });
        if (card) {
            return res.status(200).json({ card });
        }

        return res.status(404).send(`A card with ID: ${id} does not exist.`)
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const updateCardById = async (req, res) => {
    try {
        const { id } = req.params;
        const [ updated ] = await Card.update(req.body, {
            where: {id: id}
        });

        if (updated) {
            const updatedCard = await Card.findOne({ where: {id: id} });
            return res.status(200).json({ card: updatedCard });
        }

        return res.status(404).send(`A card with ID: ${id} does not exist.`)

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteCardById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = Card.destroy({ where: {id: id} });
        if (deleted) {
            return res.status(204).send(`Card with ID: ${id} was deleted.`);
        } 

        return res.status(404).send(`A card with ID: ${id} does not exist.`)
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createCard,
    findAllCards,
    findCardById,
    updateCardById,
    deleteCardById
}