'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const GoodsCategory = app.model.define('goods_category', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    sort: INTEGER,
    state: INTEGER,
  });

  GoodsCategory.associate = function() {
    app.model.GoodsCategory.hasOne(GoodsCategory, {
      as: 'parent',
      foreignKey: 'parent_id',
    });

    app.model.GoodsCategory.hasMany(app.model.Goods);
  };

  return GoodsCategory;
};
