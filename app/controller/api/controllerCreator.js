'use strict';

const controllerCreator = (serviceName) => {
  return {
    async index(ctx) {
      const query = {
        limit: ctx.helper.parseInt(ctx.query.limit || 20),
        offset: ctx.helper.parseInt(ctx.query.offset || 0),
      };
      ctx.body = await ctx.service[serviceName].findAll(query);
    },

    async show(ctx) {
      ctx.body = await ctx.service[serviceName].findById(ctx.helper.parseInt(ctx.params.id));
    },

    async create(ctx, keys) {
      const params = {};
      keys.forEach(key => {
        params[key] = ctx.request.body[key];
      });

      const model = await ctx.service[serviceName].create({
        ...params
      });
      ctx.status = 201;
      ctx.body = model;
    },

    async update(ctx) {
      const id = ctx.helper.parseInt(ctx.params.id);
      const model = await ctx.service[serviceName].update(id, ctx.request.body);
      if (!model) {
        ctx.status = 404;
        return;
      }

      ctx.body = model;
    },

    async destroy(ctx) {
      const id = ctx.helper.parseInt(ctx.params.id);
      const model = await ctx.service[serviceName].delete(id);
      if (!model) {
        ctx.status = 404;
        return;
      }
      ctx.status = 200;
    }
  }
}

module.exports = controllerCreator;
