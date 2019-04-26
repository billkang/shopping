'use strict';

const Service = require('egg').Service;
const serviceCreator = require('./serviceCreator');

const service = serviceCreator('User');

class UserService extends Service {
  findAll({
    limit,
    offset,
  }) {
    return service.findAll(this.ctx, {
      limit,
      offset,
    });
  }

  findById(id) {
    return service.findById(this.ctx, id);
  }

  create(payload) {
    try {
      return service.create(this.ctx, payload);
    } catch (e) {
      throw e.message;
    }
  }

  async update(id, payload) {
    return service.update(this.ctx, id, payload);
  }

  async delete(id) {
    return service.delete(this.ctx, id);
  }
}

module.exports = UserService;
