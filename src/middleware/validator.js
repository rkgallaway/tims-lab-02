'use strict';

module.exports = (request, response, next) => {
  if (request.query.name) {
    next();
  } else {
    next('Query param (or query string) must be name');
  }
};



