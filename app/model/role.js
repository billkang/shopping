'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
    NOW,
  } = app.Sequelize;

  const Role = app.model.define('role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(30),
      unique: true,
    },
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

  Role.associate = function () {
    app.model.Role.hasMany(app.model.Account);
  };

  return Role;
};
