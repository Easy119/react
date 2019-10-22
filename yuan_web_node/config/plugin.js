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
    enable: false,
    package: 'egg-mongodb'
  },
  mongoose:{
    enable: true, // 开启插件
		package: 'egg-mongoose'
  },
  helper:{
    enable:true,
    package:'egg-helper'
  }
};
