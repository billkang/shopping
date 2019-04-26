'use strict';
module.exports = app => {
  const {
    router,
    controller
  } = app;

  router.get('/admin(/.+)?', controller.admin.index.home);
  router.get('/client', controller.index.index.client);
  router.get('/', controller.index.index.index);

  router.resources('accounts', '/api/accounts', controller.api.accounts);
  router.resources('goods', '/api/goods', controller.api.goods);
  router.resources('roles', '/api/roles', controller.api.roles);
  router.resources('users', '/api/users', controller.api.users);
};
