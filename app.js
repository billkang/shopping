'use strict';

const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    // app.beforeStart(async () => {
    //   await app.model.sync({
    //     force: true,
    //   });
    // });
  }

  // // 处理用户信息
  // app.passport.verify(async (ctx, user) => {
  //   const {
  //     username,
  //     password
  //   } = user;

  //   const account = await ctx.model.Account.findOne({
  //     where: {
  //       username,
  //       password
  //     }
  //   });

  //   if (!account) {
  //     throw new Error('登陆失败，用户名或者密码错误！');
  //   }

  //   return account;
  // });

  // app.passport.serializeUser(async (ctx, user) => {
  //   if(user && user.dataValues) {
  //     return user.dataValues;
  //   }
  //   return null;
  // });

  // app.passport.deserializeUser(async (ctx, user) => {
  //   console.log('deserializeUser: ', user);

  //   return user;
  // });
};
