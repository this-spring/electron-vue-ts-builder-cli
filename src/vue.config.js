/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-04-23 13:53:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-04-23 14:19:56
 */
/* eslint-disable */
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/favicon.ico'
        },
        mac: {
          icon: './public/favicon.ico'
        },
      },
    }
  },
};