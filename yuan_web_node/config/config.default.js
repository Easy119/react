/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571642028835_3617';

  // add your middleware config here
  config.middleware = [ 'jwt' ];
  config.jwt = {
    enable: true,
    ignore: [ '/default/user/register', '/default/user/login' ],
  }
  config.multipart = {
    mode: 'file'
  };
  config.api = 'http://127.0.0.1:7001/'
  config.cors = {
    origin: 'http://localhost:3000',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      client: {
        // host
        host: 'localhost',
        // port
        port: '27017',
        // username
        user: 'root',
        // password
        password: '123456',
        // database
        database: '369',
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    },
    mongodb: {
      app: true,
      agent: false,
      username: '',
      password: '',
      hosts: '127.0.0.1:27017',
      db: 'test',
      query: '',
    },
    mongoose:{
      client: {
        app: true,
        agent: false,
        url: 'mongodb://127.0.0.1:27017/test',
        options: {}
      }
    },
  };
  config.security = {
    csrf: {
        enable: false,
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};
