'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
    NOW,
  } = app.Sequelize;

  const Account = app.model.define('account', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(30),
      unique: true,
    },
    password: STRING(30),
    state: INTEGER,
    created_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  });

  Account.associate = function () {
    app.model.Account.hasMany(app.model.Article);
  };

  return Account;
};
