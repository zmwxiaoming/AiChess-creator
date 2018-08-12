/**
 * 移动规则
 */
var Constant = require("./Constant.js");

//-----------------私有的工具函数
var get_stone_num_between_row_col = function(game_board_info, from_row, from_col, to_row, to_col){
    var count = 0;

    //
    if(from_row === to_row){

        var began_col = from_col;
        var end_col = to_col;

        if(from_col > to_col){
            began_col = to_col;
            end_col = from_col;
        }

        //
        for(var i = began_col+1; i <= end_col-1; i++){
            if(game_board_info.piecesArrArr[from_row][i]){
                count++;
            }
        }
        
    }
    //
    else if(from_col === to_col){
        var began_row = from_row;
        var end_row = to_row;

        if(from_row > to_row){
            began_row = to_row;
            end_row = from_row;
        }

        //
        for(var i = began_row+1; i <= end_row-1; i++){
            if(game_board_info.piecesArrArr[i][from_col]){
                count++;
            }
        }
    }

    //
    return count;
}


//车
var canMoveChe = function(game_board_info, row, col){


}

//马
var canMoveMa = function(game_board_info, row, col){

}

//象
var canMoveXiang = function(game_board_info, row, col){

}

//士
var canMoveShi = function(game_board_info, row, col){

}

//炮
var canMovePao = function(game_board_info, row, col){

    //当前选中的棋子
    var m_cur_click_stone = game_board_info.m_cur_click_stone;

    //
    var num = get_stone_num_between_row_col(game_board_info, m_cur_click_stone.m_row, m_cur_click_stone.m_col, row, col);

    if(m_cur_click_stone.m_row === row || m_cur_click_stone.m_col === col){

    }else{

        console.log("-----移动炮必须满足在一条直线上");
        return false;
    }

    //仅仅移动(包括横和竖),则移动到的row col不能有子
    if(num == 0){
        var stone = game_board_info.piecesArrArr[row][col];
        if(!stone){
            return true;
        }else{
            console.log("-----仅仅移动的话，不可以移动到有子的地方");
            return false;
        }
    }
    //吃一个子
    else if(num == 1){

        var stone = game_board_info.piecesArrArr[row][col];
        if(stone){
            return true;
        }else{

            console.log("-----间山打子的话，必须有一个子");
            return false;
        }
        
    }
    
    //这按道理执行不到
    return false;
}

//兵
var canMoveBing = function(game_board_info, row, col){

}

//将
var canMoveJiang = function(game_board_info, row, col){

}


//
var canMove = function(game_board_info, row, col){
    var m_cur_click_stone = game_board_info.m_cur_click_stone;

    console.log("m_cur_click_stone.m_stone_type:" + m_cur_click_stone.m_stone_type);

    //
    switch(m_cur_click_stone.m_stone_type){

        //车
        case Constant.stone_type.che:
            return canMoveChe(game_board_info, row, col);

        //马
        case Constant.stone_type.ma:
            return canMoveMa(game_board_info, row, col);

        //象
        case Constant.stone_type.xiang:
            return canMoveXiang(game_board_info, row, col);

        //士
        case Constant.stone_type.shi:
            return canMoveShi(game_board_info, row, col);

        //炮
        case Constant.stone_type.pao:
            return canMovePao(game_board_info, row, col);

        //兵
        case Constant.stone_type.bing:
            return canMoveBing(game_board_info, row, col);

        //将
        case Constant.stone_type.jiang:
            return canMoveJiang(game_board_info, row, col);

        default:
            return false;
    }

    return false;
}

//导出规则表
module.exports = {
    canMove:        canMove
}