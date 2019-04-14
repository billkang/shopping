'use strict';

module.exports = app => {
  const {
    STRING,
    TEXT,
    INTEGER,
  } = app.Sequelize;

  const Article = app.model.define('article', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    sub_title: STRING(30),
    content: TEXT,
  });

  return Article;
};
