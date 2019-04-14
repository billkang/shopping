'use strict';

module.exports = app => {
  const {
    INTEGER,
  } = app.Sequelize;

  const Favorite = app.model.define('favorite', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  Favorite.associate = function() {
    app.model.Favorite.belongsTo(app.model.Goods);
  };

  return Favorite;
};
