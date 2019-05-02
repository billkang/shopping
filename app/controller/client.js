'use strict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  async index() {
    await this.ctx.render('index/index.js');
  }

  async client() {
    await this.ctx.renderClient('index/index.js');
  }
};
