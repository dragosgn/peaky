'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (contetn, words) {
  return content.replace(new RegExp(words.join('|'), 'i'), '***');
};