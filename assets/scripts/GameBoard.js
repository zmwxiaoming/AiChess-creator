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
        piecePrefab:{
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {

        this.node.on(cc.Node.EventType.TOUCH_START, function(e){

            var pos = this.node.convertToNodeSpaceAR(e.getLocation());
           
            var row = Math.floor( (pos.y + Constant.left_bottom_pos.len_y + Constant.cell_size*0.5) / Constant.cell_size);
            var col = Math.floor( (pos.x + Constant.left_bottom_pos.len_x + Constant.cell_size*0.5) / Constant.cell_size);
        
            //
            if(row < 0 || row > 9 || col < 0 || col > 8){
                return;
            }else{
                this.put_piece_at(row, col);
            }

        }.bind(this), this);
    },

    put_piece_at: function(row, col ){
   
        var x =  col * Constant.cell_size - Constant.left_bottom_pos.len_x
        var y =  row * Constant.cell_size - Constant.left_bottom_pos.len_y;

        //
        var piece = this.createPieceByName("black_shi");
        piece.setPosition(x, y);
        this.node.addChild(piece);
    },

    createPieceByName: function(pieceName){
        var piece = cc.instantiate(this.piecePrefab);
        piece.getComponent(cc.Sprite).spriteFrame = this.piecesAtlas.getSpriteFrame(pieceName);
        return piece;
    },

    start () {

    }
});
