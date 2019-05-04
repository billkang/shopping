'use strict';

const Controller = require('egg').Controller;

const modelMap = {
  'accounts': 'Account',
  'goods': 'Goods',
  'roles': 'Role',
  'users': 'User',
}

class CommonController extends Controller {
  async index() {
    const { ctx } = this;
    const { resourceName } = ctx.params;

    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit || 20),
      offset: ctx.helper.parseInt(ctx.query.offset || 0),
    };
    ctx.body = await ctx.service.common.findAll(modelMap[resourceName], query);
  }

  async show() {
    const {
      ctx
    } = this;
    const {
      resourceName
    } = ctx.params;

    ctx.body = await ctx.service.common.findById(modelMap[resourceName], ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const {
      ctx
    } = this;
    const {
      resourceName
    } = ctx.params;

    const model = await ctx.service.common.create(modelMap[resourceName], ctx.request.body);
    ctx.status = 201;
    ctx.body = model;
  }

  async update() {
    const {
      ctx
    } = this;
    const {
      id,
      resourceName
    } = ctx.params;

    const model = await ctx.service.common.update(modelMap[resourceName], ctx.helper.parseInt(id), ctx.request.body);
    if (!model) {
      ctx.status = 404;
      return;
    }

    ctx.body = model;
  }

  async destroy() {
    const {
      ctx
    } = this;
    const {
      id,
      resourceName
    } = ctx.params;
    const model = await ctx.service.common.delete(modelMap[resourceName], ctx.helper.parseInt(id));
    if (!model) {
      ctx.status = 404;
      return;
    }
    ctx.status = 200;
  }
}

module.exports = CommonController;
