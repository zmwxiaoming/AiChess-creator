"use strict";
cc._RF.push(module, '729e6AvWDJL/o96ofvO44RJ', 'Constant');
// scripts/Constant.js

"use strict";

var _turn_type$red, _turn_type$black, _stone_res_config, _game_board_init_info;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 模块描述: 象棋相关常量信息
 */

//象棋一个格子的宽高
var cell_size = 76;

//左下角
var left_bottom_pos = {
    len_x: 76 * 4,
    len_y: 76 * 4.5

    //棋子类型
};var stone_type = {
    che: 1, //车
    ma: 2, //马
    xiang: 3, //象
    shi: 4, //士
    pao: 5, //炮
    bing: 6, //兵
    jiang: 7 //将


    //方
};var turn_type = {
    red: 1, //红方
    black: 2 //黑方


    /**
     * 功能：棋子配置
     * Constant.stone_res_config[Constant.turn_type.red][Constant.stone_type.che]
     */
};var stone_res_config = (_stone_res_config = {}, _defineProperty(_stone_res_config, turn_type.red, (_turn_type$red = {}, _defineProperty(_turn_type$red, stone_type.che, "red_che"), _defineProperty(_turn_type$red, stone_type.ma, "red_ma"), _defineProperty(_turn_type$red, stone_type.xiang, "red_xiang"), _defineProperty(_turn_type$red, stone_type.shi, "red_shi"), _defineProperty(_turn_type$red, stone_type.pao, "red_pao"), _defineProperty(_turn_type$red, stone_type.bing, "red_bing"), _defineProperty(_turn_type$red, stone_type.jiang, "red_jiang"), _turn_type$red)), _defineProperty(_stone_res_config, turn_type.black, (_turn_type$black = {}, _defineProperty(_turn_type$black, stone_type.che, "black_che"), _defineProperty(_turn_type$black, stone_type.ma, "black_ma"), _defineProperty(_turn_type$black, stone_type.xiang, "black_xiang"), _defineProperty(_turn_type$black, stone_type.shi, "black_shi"), _defineProperty(_turn_type$black, stone_type.pao, "black_pao"), _defineProperty(_turn_type$black, stone_type.bing, "black_bing"), _defineProperty(_turn_type$black, stone_type.jiang, "black_jiang"), _turn_type$black)), _stone_res_config);

//棋盘初始状态信息
var game_board_init_info = (_game_board_init_info = {}, _defineProperty(_game_board_init_info, 0, {
    stone_type: stone_type.che,
    turn_type: turn_type.black,
    row: 9,
    col: 0
}), _defineProperty(_game_board_init_info, 1, {
    stone_type: stone_type.ma,
    turn_type: turn_type.black,
    row: 9,
    col: 1
}), _defineProperty(_game_board_init_info, 2, {
    stone_type: stone_type.xiang,
    turn_type: turn_type.black,
    row: 9,
    col: 2
}), _defineProperty(_game_board_init_info, 3, {
    stone_type: stone_type.shi,
    turn_type: turn_type.black,
    row: 9,
    col: 3
}), _defineProperty(_game_board_init_info, 4, {
    stone_type: stone_type.jiang,
    turn_type: turn_type.black,
    row: 9,
    col: 4
}), _defineProperty(_game_board_init_info, 5, {
    stone_type: stone_type.shi,
    turn_type: turn_type.black,
    row: 9,
    col: 5
}), _defineProperty(_game_board_init_info, 6, {
    stone_type: stone_type.xiang,
    turn_type: turn_type.black,
    row: 9,
    col: 6
}), _defineProperty(_game_board_init_info, 7, {
    stone_type: stone_type.ma,
    turn_type: turn_type.black,
    row: 9,
    col: 7
}), _defineProperty(_game_board_init_info, 8, {
    stone_type: stone_type.che,
    turn_type: turn_type.black,
    row: 9,
    col: 8
}), _defineProperty(_game_board_init_info, 9, {
    stone_type: stone_type.pao,
    turn_type: turn_type.black,
    row: 7,
    col: 1
}), _defineProperty(_game_board_init_info, 10, {
    stone_type: stone_type.pao,
    turn_type: turn_type.black,
    row: 7,
    col: 7
}), _defineProperty(_game_board_init_info, 11, {
    stone_type: stone_type.bing,
    turn_type: turn_type.black,
    row: 6,
    col: 0
}), _defineProperty(_game_board_init_info, 12, {
    stone_type: stone_type.bing,
    turn_type: turn_type.black,
    row: 6,
    col: 2
}), _defineProperty(_game_board_init_info, 13, {
    stone_type: stone_type.bing,
    turn_type: turn_type.black,
    row: 6,
    col: 4
}), _defineProperty(_game_board_init_info, 14, {
    stone_type: stone_type.bing,
    turn_type: turn_type.black,
    row: 6,
    col: 6
}), _defineProperty(_game_board_init_info, 15, {
    stone_type: stone_type.bing,
    turn_type: turn_type.black,
    row: 6,
    col: 8
}), _game_board_init_info);

//导出常量表
module.exports = {
    cell_size: cell_size,
    left_bottom_pos: left_bottom_pos,
    stone_type: stone_type,
    turn_type: turn_type,
    stone_res_config: stone_res_config,
    game_board_init_info: game_board_init_info
};

cc._RF.pop();