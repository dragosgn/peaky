'use strict';

var _ = require('.');

test("replaces blacklisted words", function () {
  return expect((0, _.peaky)('The question is to be or not to be', ['be'])).toBe("The question is to *** or not to ***");
});