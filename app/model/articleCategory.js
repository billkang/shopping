'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const ArticleCategory = app.model.define('article_category', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    sort: INTEGER,
  });

  ArticleCategory.associate = function() {
    app.model.ArticleCategory.hasMany(app.model.Article);
  };

  return ArticleCategory;
};
