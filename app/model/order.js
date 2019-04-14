'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    UUID,
    DATE,
  } = app.Sequelize;

  const Order = app.model.define('order', {
    id: {
      type: UUID,
      primaryKey: true,
    },
    code: STRING(30),
    pay_info: STRING(30),
    total_price: STRING(30),
    birthday: DATE,
    profile: STRING(30),
    state: INTEGER,
  });

  Order.associate = function() {
    app.model.Order.belongsToMany(app.model.Goods, {
      as: 'Goods',
      through: 'goods_orders',
      foreignKey: 'goods_id',
    });
  };

  return Order;
};
