'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.sequelize = {
    dialect: 'mysql',
    database: 'shopping',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
  };

  exports.session = {
    key: 'TG_WEB_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true
  }

  exports.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    // 'auth',
    // 'locals',
    // 'access'
  ];

  exports.security = {
    csrf: {
    //   ignoreJSON: false,
    //   cookieName: 'csrfToken',
    //   sessionName: 'csrfToken',
    //   headerName: 'x-csrf-token'
      enable: false
    },
    xframe: {
      enable: false,
    },
  };

  exports.passportLocal = {
    usernameField: 'username',
    passwordField: 'password'
  }

  return exports;
};
