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

        return res.status(404).json({message: 'That card can not be found.'})
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

        return res.status(404).json({message: 'That card can not be found.'})

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteCardById = async (req, res) => {
    try {
        const { id } = req.params;
        const destroyed = Card.destroy({ where: {id: id} });
        if (destroyed) {
            return res.status(204).json({message: 'Your card was destroyed!'});
        } 

        return res.status(404).json({message: 'That card can not be found.'})
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