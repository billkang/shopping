'use strict';

const Controller = require('egg').Controller;
const controllerCreator = require('./controllerCreator');

const {
  index,
  show,
  create,
  update,
  destroy
} = controllerCreator('users');

class UserController extends Controller {
  index() {
    return index(this.ctx);
  }

  async show() {
    return show(this.ctx);
  }

  async create() {
    return create(this.ctx, ['name']);
  }

  async update() {
    return update(this.ctx);
  }

  async destroy() {
    return destroy(this.ctx);
  }
}

module.exports = UserController;
