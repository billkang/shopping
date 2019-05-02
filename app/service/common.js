'use strict';

const Service = require('egg').Service;

class AccountService extends Service {
  findAll(modelName, {
    limit,
    offset,
  }) {
    return this.ctx.model[modelName].findAll({
      limit,
      offset,
    });
  }

  findById(modelName, id) {
    return this.ctx.model[modelName].findById(id);
  }

  create(modelName, payload) {
    return this.ctx.model[modelName].create({
      ...payload,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  }

  async update(modelName, id, payload) {
    const model = await this.ctx.model[modelName].findById(id);
    if (!model) {
      return;
    }

    return await model.update({
      ...payload,
      updated_at: Date.now(),
    });
  }

  async delete(modelName, id) {
    const model = await this.ctx.model[modelName].findById(id);
    if (!model) {
      return;
    }

    return await model.destroy();
  }
}

module.exports = AccountService;
