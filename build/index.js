'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var peaky = exports.peaky = function peaky(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};