'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findAll({
    limit,
    offset,
  }) {
    return await this.ctx.model.User.findAll({
      limit,
      offset,
    });
  }

  async findById(userId) {
    return await this.ctx.model.User.findById(userId);
  }

  async create(user) {
    const {
      name,
      age,
    } = user;
    return await this.ctx.model.User.create({
      name,
      age,
    });
  }

  async update(id, payload) {
    const ctx = this.ctx;
    const user = await ctx.model.User.findById(id);
    if (!user) {
      return;
    }

    const {
      name,
      age,
    } = payload;
    return await user.update({
      name,
      age,
    });
  }

  async delete(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      return;
    }

    return await user.destroy();
  }
}

module.exports = UserService;
