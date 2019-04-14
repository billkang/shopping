'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    INTEGER,
    FLOAT,
  } = app.Sequelize;

  const Goods = app.model.define('goods', {
    id: {
      type: UUID,
      primaryKey: true,
    },
    title: {
      type: STRING(30),
      unique: true,
    },
    sub_title: STRING(100),
    price: FLOAT,
    cost_price: FLOAT,
    supply_price: FLOAT,
    stock_count: INTEGER,
    limit_count: INTEGER,
    state: INTEGER,
    img: STRING(100),
  });

  Goods.associate = function() {
    app.model.Goods.hasMany(app.model.GoodsImages);
    app.model.Goods.belongsToMany(app.model.Order, {
      as: 'Orders',
      through: 'goods_orders',
      foreignKey: 'order_id',
    });
  };

  return Goods;
};
