'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async home(ctx) {
    const url = ctx.url.replace(/\/admin/, '');
    await ctx.render('admin/main.js', { ctx, url });
  }
};
