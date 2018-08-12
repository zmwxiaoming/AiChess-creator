(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/GameBoard.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1c684KaTNJHgJr7+0e0Eb0M', 'GameBoard', __filename);
// scripts/GameBoard.js

'use strict';

/**
 * 功能：游戏棋盘相关逻辑
 */

var Constant = require('./Constant.js');
var Stone = require('./Stone.js');

//
cc.Class({
    extends: cc.Component,

    properties: {

        //图集资源，用于初始化棋子prefab
        piecesAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        //棋子prefab
        piecePrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    //组件加载时，进行变量初始化操作
    onLoad: function onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_START, function (e) {

            var pos = this.node.convertToNodeSpaceAR(e.getLocation());

            var row = Math.floor((pos.y + Constant.left_bottom_pos.len_y + Constant.cell_size * 0.5) / Constant.cell_size);
            var col = Math.floor((pos.x + Constant.left_bottom_pos.len_x + Constant.cell_size * 0.5) / Constant.cell_size);

            //
            if (row < 0 || row > 9 || col < 0 || col > 8) {
                return;
            } else {
                // this.put_piece_at(row, col);
            }
        }.bind(this), this);

        //初始化32颗棋子
        this.init32Stones();
    },


    init32Stones: function init32Stones() {

        //棋子初始化信息
        var game_board_init_info = Constant.game_board_init_info;

        for (var k in game_board_init_info) {
            var stone_info = game_board_init_info[k];

            var row = stone_info.row;
            var col = stone_info.col;
            var turn_type = stone_info.turn_type;
            var stone_type = stone_info.stone_type;
            var piecePrefab = this.createPieceByName(Constant.stone_res_config[turn_type][stone_type]);

            //创建一颗棋子
            var stone = new Stone(turn_type, stone_type, false, row, col, piecePrefab);

            var x = col * Constant.cell_size - Constant.left_bottom_pos.len_x;
            var y = row * Constant.cell_size - Constant.left_bottom_pos.len_y;
            stone.m_piecePrefab.setPosition(x, y);
            this.node.addChild(stone.m_piecePrefab);
            //
        }
    },

    //在row col处下一颗棋子
    put_piece_at: function put_piece_at(row, col) {

        var x = col * Constant.cell_size - Constant.left_bottom_pos.len_x;
        var y = row * Constant.cell_size - Constant.left_bottom_pos.len_y;

        //
        // var piece = this.createPieceByName("black_shi");
        var piece = this.createPieceByName(Constant.stone_res_config[Constant.turn_type.red][Constant.stone_type.che]);
        piece.setPosition(x, y);
        this.node.addChild(piece);
    },

    //根据棋子名称创建一颗棋子
    createPieceByName: function createPieceByName(pieceName) {
        var piece = cc.instantiate(this.piecePrefab);
        piece.getComponent(cc.Sprite).spriteFrame = this.piecesAtlas.getSpriteFrame(pieceName);
        return piece;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameBoard.js.map
        