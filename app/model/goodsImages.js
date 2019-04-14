'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
  } = app.Sequelize;

  const GoodsImages = app.model.define('goods_images', {
    id: {
      type: UUID,
      primaryKey: true,
    },
    img_path: STRING,
  });

  return GoodsImages;
};
