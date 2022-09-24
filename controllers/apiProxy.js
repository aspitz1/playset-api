const fetch = require('node-fetch');
const client = require('../config/redisClient');

const getCardByName = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`);
        const {cards} = await response.json();
        if (cards.length) {
            const cardsWithImgs = cards.filter(card => card.imageUrl);
            const cleanedCards = cardsWithImgs.map(card => {
                return {
                    name: card.name,
                    manaCost: card.manaCost,
                    colorIdentity: card.colorIdentity,
                    type: card.type,
                    rarity: card.rarity,
                    setName: card.setName,
                    text: card.text,
                    artist: card.artist,
                    imageUrl: card.imageUrl,
                    legalities: card.legalities,
                    magicApiId: card.id
                }
            });
            
            await client.set(name,
                JSON.stringify(cleanedCards)
            );

            await client.quit();

            return res.status(200).send(cleanedCards)
        }

        return res.status(404).json(`No cards where found with the name ${name.split('+').join(' ')}`);
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
            const cleanedCard = {
                    name: card.name,
                    manaCost: card.manaCost,
                    colorIdentity: card.colorIdentity,
                    type: card.type,
                    rarity: card.rarity,
                    setName: card.setName,
                    text: card.text,
                    artist: card.artist,
                    imageUrl: card.imageUrl,
                    legalities: card.legalities,
                    magicApiId: card.id
                }

            await client.set(id,
                JSON.stringify(cleanedCard)
            );
            await client.quit();

            return res.status(200).send(cleanedCard);
        }

        return res.status(404).json(`No cards where found with the ID: ${id}`);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getCardByName,
    getCardById
}