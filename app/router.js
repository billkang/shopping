'use strict';
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/admin(/.+)?', controller.admin.index.home);

  router.resources('users', '/api/users', controller.api.users);
  router.resources('roles', '/api/roles', controller.api.roles);
};
