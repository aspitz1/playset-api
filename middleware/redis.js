const client = require('../config/redisClient');

const redis = async (req, res, next) => {
  try {
    await client.connect();
    const getRes = await client.get(req.params.name || req.params.id);
    if (getRes) {
        await client.quit();
        console.log(`returning ${req.params.name || req.params.id} from cache `);
        return res.json({ success: true, data: JSON.parse(getRes) });
    }
    await client.quit();
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = redis;