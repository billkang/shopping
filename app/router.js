'use strict';
module.exports = app => {
  const {
    router,
  } = app;

  // admin apis

  router.resources('accounts', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('goods', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('roles', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('users', '/api_admin/:resourceName', 'apiAdmin.common');

  const localStrategy = app.passport.authenticate('local');
  app.router.post('/passport/local', localStrategy);
  app.router.get('/admin/logout', 'admin.logout');

  router.get('/admin', 'admin.index');
  router.get('/', 'client.index');
};
