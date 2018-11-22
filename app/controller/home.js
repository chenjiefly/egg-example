'use strict';

const Controller = require('egg').Controller;

// 访问地址：http://127.0.0.1:7001
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
