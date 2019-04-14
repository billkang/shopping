'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit || 20),
      offset: ctx.helper.parseInt(ctx.query.offset || 0),
    };
    ctx.body = await ctx.service.roles.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.roles.findById(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
      const ctx = this.ctx;
        const {
        name,
        } = ctx.request.body;

    try{
        const Role = await ctx.service.roles.create({
        name,
        });
        ctx.status = 201;
        ctx.body = Role;
    } catch(e) {
        console.log(e);
        ctx.status = 500;
        ctx.body = {
            message: e.message
        }
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const Role = await ctx.service.roles.update(id, ctx.request.body);
    if (!Role) {
      ctx.status = 404;
      return;
    }

    ctx.body = Role;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const Role = await ctx.service.roles.delete(id);
    if (!Role) {
      ctx.status = 404;
      return;
    }
    ctx.status = 200;
  }
}

module.exports = RoleController;
