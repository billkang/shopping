module.exports = () => {
  return async function auth(ctx, next) {
    // if (ctx.path.indexOf('/admin') !== -1 && !ctx.isAuthenticated()) {
    //   ctx.session.returnTo = ctx.path;
    //   return await ctx.redirect('/admin');
    // }
    await next();
  };
};
