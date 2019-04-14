'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const Brand = app.model.define('brand', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING(30),
      unique: true,
    },
    info: STRING(30),
    logo: STRING(30),
    state: INTEGER,
    sort: INTEGER,
  });

  Brand.associate = function() {
    app.model.Brand.hasMany(app.model.Goods);
  };

  return Brand;
};
