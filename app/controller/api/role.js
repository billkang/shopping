'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit || 20),
      offset: ctx.helper.parseInt(ctx.query.offset || 0),
    };
    ctx.body = await ctx.service.role.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.role.findById(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const {
      name,
    } = ctx.request.body;
    const Role = await ctx.service.role.create({
      name,
    });
    ctx.status = 201;
    ctx.body = Role;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const Role = await ctx.service.role.update(id, ctx.request.body);
    if (!Role) {
      ctx.status = 404;
      return;
    }

    ctx.body = Role;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const Role = await ctx.service.role.delete(id);
    if (!Role) {
      ctx.status = 404;
      return;
    }
    ctx.status = 200;
  }
}

module.exports = RoleController;
