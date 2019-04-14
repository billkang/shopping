'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async findAll({
    limit,
    offset,
  }) {
    return await this.ctx.model.Role.findAll({
      limit,
      offset,
    });
  }

  async findById(id) {
    return await this.ctx.model.Role.findById(id);
  }

  async create(Role) {
    const {
      name,
    } = Role;
    return await this.ctx.model.Role.create({
      name,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  }

  async update(id, payload) {
    const ctx = this.ctx;
    const Role = await ctx.model.Role.findById(id);
    if (!Role) {
      return;
    }

    const {
      name,
    } = payload;
    return await Role.update({
      name,
      updated_at: Date.now(),
    });
  }

  async delete(id) {
    const Role = await this.ctx.model.Role.findById(id);
    if (!Role) {
      return;
    }

    return await Role.destroy();
  }
}

module.exports = RoleService;
