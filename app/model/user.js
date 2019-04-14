'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(30),
      unique: true,
    },
    password: STRING(30),
    email: {
      type: STRING(30),
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    mobile: {
      type: STRING(30),
      validate: {
        is: /^[0-9]+$/i,
      },
      unique: true,
    },
    birthday: DATE,
    profile: STRING(30),
    state: INTEGER,
  });

  User.associate = function() {
    app.model.User.belongsTo(app.model.Cart);
    app.model.User.hasMany(app.model.Consignee);
    app.model.User.hasMany(app.model.Order);
    app.model.User.hasMany(app.model.Favorite);
  };

  return User;
};
