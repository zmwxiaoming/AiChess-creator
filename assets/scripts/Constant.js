/**
 * 模块描述: 象棋相关常量信息
 */

//象棋一个格子的宽高
var cell_size = 76;

//左下角
var left_bottom_pos = {
    len_x: 76 * 4,
    len_y: 76 * 4.5
}

//棋子类型
var stone_type = {
    che:    1,   //车
    ma:     2,   //马
    xiang:  3,   //象
    shi:    4,   //士
    pao:    5,   //炮
    bing:   6,   //兵
    jiang:  7    //将
}

//方
var turn_type = {
    red:    1,   //红方
    black:   2   //黑方
}

/**
 * 功能：棋子配置
 * Constant.stone_res_config[Constant.turn_type.red][Constant.stone_type.che]
 */
var stone_res_config = {

    [turn_type.red]:{
        [stone_type.che]:   "red_che",
        [stone_type.ma]:    "red_ma",
        [stone_type.xiang]: "red_xiang",
        [stone_type.shi]:   "red_shi",
        [stone_type.pao]:   "red_pao",
        [stone_type.bing]:  "red_bing",
        [stone_type.jiang]: "red_jiang",
    },

    [turn_type.black]:{
        [stone_type.che]:   "black_che",
        [stone_type.ma]:    "black_ma",
        [stone_type.xiang]: "black_xiang",
        [stone_type.shi]:   "black_shi",
        [stone_type.pao]:   "black_pao",
        [stone_type.bing]:  "black_bing",
        [stone_type.jiang]: "black_jiang",
    },
};


//棋盘初始状态信息
var game_board_init_info = {
    //黑色棋子
    [0] : {
        stone_type: stone_type.che,
        turn_type: turn_type.black,
        row: 9,
        col: 0
    },
    [1] : {
        stone_type: stone_type.ma,
        turn_type: turn_type.black,
        row: 9,
        col: 1
    },
    [2] : {
        stone_type: stone_type.xiang,
        turn_type: turn_type.black,
        row: 9,
        col: 2
    },
    [3] : {
        stone_type: stone_type.shi,
        turn_type: turn_type.black,
        row: 9,
        col: 3
    },
    [4] : {
        stone_type: stone_type.jiang,
        turn_type: turn_type.black,
        row: 9,
        col: 4
    },
    [5] : {
        stone_type: stone_type.shi,
        turn_type: turn_type.black,
        row: 9,
        col: 5
    },
    [6] : {
        stone_type: stone_type.xiang,
        turn_type: turn_type.black,
        row: 9,
        col: 6
    },
    [7] : {
        stone_type: stone_type.ma,
        turn_type: turn_type.black,
        row: 9,
        col: 7
    },
    [8] : {
        stone_type: stone_type.che,
        turn_type: turn_type.black,
        row: 9,
        col: 8
    },
    [9] : {
        stone_type: stone_type.pao,
        turn_type: turn_type.black,
        row: 7,
        col: 1
    },
    [10] : {
        stone_type: stone_type.pao,
        turn_type: turn_type.black,
        row: 7,
        col: 7
    },
    [11] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.black,
        row: 6,
        col: 0
    },
    [12] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.black,
        row: 6,
        col: 2
    },
    [13] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.black,
        row: 6,
        col: 4
    },
    [14] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.black,
        row: 6,
        col: 6
    },
    [15] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.black,
        row: 6,
        col: 8
    },

    //红色棋子
    [16] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.red,
        row: 3,
        col: 0
    },
    [17] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.red,
        row: 3,
        col: 2
    },
    [18] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.red,
        row: 3,
        col: 4
    },
    [19] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.red,
        row: 3,
        col: 6
    },
    [20] : {
        stone_type: stone_type.bing,
        turn_type: turn_type.red,
        row: 3,
        col: 8
    },
    [21] : {
        stone_type: stone_type.pao,
        turn_type: turn_type.red,
        row: 2,
        col: 1
    },
    [22] : {
        stone_type: stone_type.pao,
        turn_type: turn_type.red,
        row: 2,
        col: 7
    },
    [23] : {
        stone_type: stone_type.che,
        turn_type: turn_type.red,
        row: 0,
        col: 0
    },
    [24] : {
        stone_type: stone_type.ma,
        turn_type: turn_type.red,
        row: 0,
        col: 1
    },
    [25] : {
        stone_type: stone_type.xiang,
        turn_type: turn_type.red,
        row: 0,
        col: 2
    },
    [26] : {
        stone_type: stone_type.shi,
        turn_type: turn_type.red,
        row: 0,
        col: 3
    },
    [27] : {
        stone_type: stone_type.jiang,
        turn_type: turn_type.red,
        row: 0,
        col: 4
    },
    [28] : {
        stone_type: stone_type.shi,
        turn_type: turn_type.red,
        row: 0,
        col: 5
    },
    [29] : {
        stone_type: stone_type.xiang,
        turn_type: turn_type.red,
        row: 0,
        col: 6
    },
    [30] : {
        stone_type: stone_type.ma,
        turn_type: turn_type.red,
        row: 0,
        col: 7
    },
    [31] : {
        stone_type: stone_type.che,
        turn_type: turn_type.red,
        row: 0,
        col: 8
    },
}


//导出常量表
module.exports = {
    cell_size:             cell_size,
    left_bottom_pos:       left_bottom_pos,
    stone_type:            stone_type,
    turn_type:             turn_type,
    stone_res_config:      stone_res_config,
    game_board_init_info:  game_board_init_info
};