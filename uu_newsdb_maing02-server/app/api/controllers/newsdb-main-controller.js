"use strict";
const NewsdbMainAbl = require("../../abl/newsdb-main-abl.js");

class NewsdbMainController {
  init(ucEnv) {
    return NewsdbMainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new NewsdbMainController();
