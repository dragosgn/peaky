'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("replaces blacklisted words", function () {
  return expect((0, _2.default)('The question is to be or not to be', ['be'])).toBe("The question is to *** or not to ***");
});