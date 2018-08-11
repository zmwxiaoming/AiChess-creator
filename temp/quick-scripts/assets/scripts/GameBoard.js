(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/GameBoard.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1c684KaTNJHgJr7+0e0Eb0M', 'GameBoard', __filename);
// scripts/GameBoard.js

"use strict";

var Constant = require('./Constant.js');

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

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_START, function (e) {

            var pos = this.node.convertToNodeSpaceAR(e.getLocation());

            var row = Math.floor((pos.y + Constant.left_bottom_pos.len_y + Constant.cell_size * 0.5) / Constant.cell_size);
            var col = Math.floor((pos.x + Constant.left_bottom_pos.len_x + Constant.cell_size * 0.5) / Constant.cell_size);

            //
            if (row < 0 || row > 9 || col < 0 || col > 8) {
                return;
            } else {
                this.put_piece_at(row, col);
            }
        }.bind(this), this);
    },


    put_piece_at: function put_piece_at(row, col) {

        var x = col * Constant.cell_size - Constant.left_bottom_pos.len_x;
        var y = row * Constant.cell_size - Constant.left_bottom_pos.len_y;

        var piece = this.createPieceByName("black_shi");
        piece.setPosition(x, y);
        this.node.addChild(piece);
    },

    createPieceByName: function createPieceByName(pieceName) {
        var piece = cc.instantiate(this.piecePrefab);
        piece.getComponent(cc.Sprite).spriteFrame = this.piecesAtlas.getSpriteFrame(pieceName);
        return piece;
    },

    start: function start() {}
}

// update (dt) {},
);

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
        