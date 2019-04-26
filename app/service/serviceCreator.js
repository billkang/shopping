'use strict';

const serviceCreator = (modelName) => {
  return {
    async findAll(ctx, {
      limit,
      offset,
    }) {
      console.log(modelName);

      return await ctx.model[modelName].findAll({
        limit,
        offset,
      });
    },

    async findById(ctx, id) {
      return await ctx.model[modelName].findById(id);
    },

    async create(ctx, payload) {
      try {
        return await ctx.model[modelName].create({
          ...payload,
          created_at: Date.now(),
          updated_at: Date.now(),
        });
      } catch (e) {
        throw new Error(e.original.sqlMessage);
      }
    },

    async update(ctx, id, payload) {
      const model = await ctx.model[modelName].findById(id);
      if (!model) {
        return;
      }

      return await model.update({
        ...payload,
        updated_at: Date.now(),
      });
    },

    async delete(ctx, id) {
      const model = await ctx.model[modelName].findById(id);
      if (!model) {
        return;
      }

      return await model.destroy();
    }
  };
}

module.exports = serviceCreator;
