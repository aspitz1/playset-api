'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    id: {
      allowNull: false,
      defaultValue: sequelize.fn('uuid_generate_v4'),
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: DataTypes.STRING,
    magicApiId: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    collections: {
      defaultValue: ['main'],
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    }
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};