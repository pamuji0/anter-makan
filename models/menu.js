'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    nama: DataTypes.STRING,
    jenis: DataTypes.STRING,
    stock: DataTypes.NUMBER,
    url:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};