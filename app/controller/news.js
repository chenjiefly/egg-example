'use strict';

const Controller = require('egg').Controller;

// 访问地址：http://127.0.0.1:7001/news?page=1
class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
