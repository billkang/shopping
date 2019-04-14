'use strict';
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/list', controller.index.index.list);
  router.get('/category', controller.category.category.index);

  router.get('/admin(/.+)?', controller.admin.index.home);

  router.resources('users', '/api/users', controller.user);
  router.resources('roles', '/api/roles', controller.role);
};
