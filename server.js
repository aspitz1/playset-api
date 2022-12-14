require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const db = require('./models');
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use('/api', routes);    

db.sequelize.authenticate()
    .then(() => {
        db.sequelize.sync({ force: process.env.FORCE ? true : false });
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
    })
    .catch(err => console.log(err));