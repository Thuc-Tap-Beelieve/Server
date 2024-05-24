"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      id_pr: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      productName: DataTypes.STRING,
      id_cat: DataTypes.STRING,
      pricesaleProduct: DataTypes.INTEGER,
      priceProduct: DataTypes.INTEGER,
      imageProduct: DataTypes.STRING,
      descriptionProduct: DataTypes.STRING,
      productColor: DataTypes.STRING,
      size: DataTypes.STRING,
      soluong: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
