'use strict';

/** @type Egg.EggPlugin */

module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: false,
    package: 'egg-mysql'
  },
  mongodb:{
    enable: true,
    package: 'egg-mongodb'
  }
};
