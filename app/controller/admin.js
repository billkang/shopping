'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async index(ctx) {
    const url = ctx.url;

    console.log(ctx.user);

    await ctx.renderClient('admin/main.js', {
      ctx,
      url
    });
  }

  // async login() {
  //   const ctx = this.ctx;

  //   console.log(ctx);
  // }

  async authCallback(ctx) {
    console.log(this.ctx.user);

    await this.ctx.login(this.ctx.user);
    ctx.body = {
      user: ctx.user,
    }
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
};
