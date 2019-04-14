'use strict';

module.exports = app => {
  const {
    JSON,
    INTEGER,
  } = app.Sequelize;

  const Cart = app.model.define('cart', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    cart: JSON,
  });

  return Cart;
};
