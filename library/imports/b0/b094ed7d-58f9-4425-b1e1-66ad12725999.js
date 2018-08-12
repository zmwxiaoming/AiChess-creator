"use strict";
cc._RF.push(module, 'b094e19WPlEJbHhZq0SclmZ', 'Stone');
// scripts/Stone.js

"use strict";

/**
 * 棋盘中的一颗棋子
 */

/**
 * turn_type     红黑哪一方
 * stone_type    棋子类型
 * is_dead       是否已经死了
 * row           棋子所在行
 * col           棋子所在列
 * pieceFrefab   棋子对应的prefab图片
 */
var Stone = function Stone(turn_type, stone_type, is_dead, row, col, piecePrefab) {
  this.m_turn_type = turn_type;
  this.m_stone_type = stone_type;
  this.m_is_dead = is_dead;
  this.m_row = row;
  this.m_col = col;
  this.m_piecePrefab = piecePrefab;
};

module.exports = Stone;

cc._RF.pop();