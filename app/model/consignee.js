'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Consignee = app.model.define('consignee', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    mobile: STRING(30),
    country: STRING(30),
    province: STRING(30),
    county: STRING(30),
    city: STRING(30),
    address: STRING(200),
    is_default: BOOLEAN,
  });

  return Consignee;
};
