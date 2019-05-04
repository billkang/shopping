'use strict';

const db = require('./db');

module.exports = app => {
  const {
    router,
  } = app;


  // handle user info here
  app.passport.verify(async (_, user) => {
    const {
      username,
      password
    } = user
    const targetUser = await db.findByUsername(username)
    if (!targetUser) {
      throw new Error('you donnot have a correct username')
    }

    if (targetUser.password !== password) {
      throw new Error('you donnot have a correct password')
    }

    console.log(targetUser);

    return targetUser
  })

  app.passport.serializeUser(async (_, user) => user && user.id)
  // this user is userId passed from `serializeUser`
  app.passport.deserializeUser(async (_, user) => user ? db.findById(user) : null)



  router.get('/', 'client.index');
  router.get('/admin', 'admin.index');
  router.get('/admin/*', 'admin.index');


  router.get('/authCallback', 'admin.authCallback');
  // admin login
  router.post('/api_admin/login', app.passport.authenticate('local', {
    successRedirect: '/authCallback',
    failureRedirect: '/admin/login'
  }));

  // admin logout
  router.get('/api_admin/logout', 'admin.logout');


  //  admin apis
  router.resources('accounts', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('goods', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('roles', '/api_admin/:resourceName', 'apiAdmin.common');
  router.resources('users', '/api_admin/:resourceName', 'apiAdmin.common');
};
