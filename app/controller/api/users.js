'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;

    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit || 20),
      offset: ctx.helper.parseInt(ctx.query.offset || 0),
    };
    ctx.body = await ctx.service.users.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.users.findById(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const {
      name,
      age,
    } = ctx.request.body;
    const user = await ctx.service.users.create({
      name,
      age,
    });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.service.users.update(id, ctx.request.body);
    if (!user) {
      ctx.status = 404;
      return;
    }

    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.service.users.delete(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    ctx.status = 200;
  }
}

module.exports = UserController;
