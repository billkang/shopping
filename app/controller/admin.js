'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async index(ctx) {
    if(ctx.isAuthenticated()){
      const url = ctx.url.replace(/\/admin/, '');
      await ctx.render('admin/main.js', {
        ctx,
        url
      });
    } else {
      ctx.session.returnTo = ctx.path;
      await ctx.render('admin/main.js');
    }
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
};
