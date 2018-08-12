/**
 * 功能：游戏棋盘相关逻辑
 */

var Constant = require('./Constant.js');
var Stone = require('./Stone.js');
var MoveRule = require("./MoveRule.js");

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
        },

        //二维数组存储棋子数据
        piecesArrArr:[],

        //是否轮到我下棋了
        isMyTurn: true,

        //自己点击的棋子
        m_cur_click_stone: null
    },

    //组件加载时，进行变量初始化操作
    onLoad () {

        //初始化32颗棋子
        this.init32Stones();

        //初始化点击事件
        this.node.on(cc.Node.EventType.TOUCH_START, function(e){

            //不论到我走棋，直接返回
            if(!this.isMyTurn){
                return;
            }

            //
            var click_info = this.get_select_row_col_by_click(e);
            var row = click_info.row;
            var col = click_info.col;
        
            //
            if(row < 0 || row > 9 || col < 0 || col > 8){
                return;
            }else{
                var click_stone = this.piecesArrArr[row][col];
                
                //点中了一个棋子
                if(click_stone){

                    //点了红旗，切换当前选中的棋子
                    if(click_stone.m_turn_type === Constant.turn_type.red){

                        this.select_one_stone(click_stone);
                
                    }
                    //点了黑棋，1.如果当前没有选中棋子，则报错 2.选中了棋子，则试图吃掉当前的黑棋
                    else{
          
                        if(!this.m_cur_click_stone){

                            console.log("-----只能走红棋");

                        }else{

                            //试图去吃黑色棋子 this.m_cur_click_stone
                            if(MoveRule.canMove(this, row, col)){
                                this.kill_stone(row, col);
                            }
                        }
                    } 
                }
                //选中棋子后，又选择了一个空位置
                else{

                    if(MoveRule.canMove(this, row, col)){
                        this.move_stone(row, col);
                    }
                }
            }

        }.bind(this), this);
    },

    //根据点击点获取点击的行列
    get_select_row_col_by_click: function(e){
        var pos = this.node.convertToNodeSpaceAR(e.getLocation());
           
        var row = Math.floor( (pos.y + Constant.left_bottom_pos.len_y + Constant.cell_size*0.5) / Constant.cell_size);
        var col = Math.floor( (pos.x + Constant.left_bottom_pos.len_x + Constant.cell_size*0.5) / Constant.cell_size);

        return {
            row: row,
            col: col
        }
    },

    //选中一颗棋子
    select_one_stone: function(click_stone){

        if(this.m_cur_click_stone){
            var pre_prefab = this.m_cur_click_stone.m_piecePrefab;
            pre_prefab.stopAllActions();
            pre_prefab.scale = 1;
        }

        //刷新新的棋子
        this.m_cur_click_stone = click_stone;
        var prefab = this.m_cur_click_stone.m_piecePrefab;
        prefab.stopAllActions();
        prefab.scale = 1;
        prefab.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 0.8), cc.scaleTo(0.5, 1.0))));
    },

    //杀死棋子
    kill_stone: function(row, col){
        //1.黑棋被吃掉
        var eatBlackStone = this.piecesArrArr[row][col];
        eatBlackStone.m_is_dead = true;
        eatBlackStone.m_piecePrefab.removeFromParent();

        //2.存的的红棋的位置置空
        this.piecesArrArr[this.m_cur_click_stone.m_row][this.m_cur_click_stone.m_col] = null;

        //3.走棋后修改红旗属性
        this.m_cur_click_stone.m_row = row;
        this.m_cur_click_stone.m_col = col;

        //4.修改红旗新的UI位置
        var x =  col * Constant.cell_size - Constant.left_bottom_pos.len_x
        var y =  row * Constant.cell_size - Constant.left_bottom_pos.len_y;
        this.m_cur_click_stone.m_piecePrefab.setPosition(x, y);

        //5.刷新存储
        this.piecesArrArr[row][col] = this.m_cur_click_stone;

        //6.走完棋后设置当前未选中棋子
        var prefab = this.m_cur_click_stone.m_piecePrefab;
        prefab.stopAllActions();
        prefab.scale = 1;
        this.m_cur_click_stone = null;
    },

    //移动棋子
    move_stone: function(row, col){
        //1.清理原来位置
        this.piecesArrArr[this.m_cur_click_stone.m_row][this.m_cur_click_stone.m_col] = null;                 

        //2.设置新的数据
        this.m_cur_click_stone.m_row = row;
        this.m_cur_click_stone.m_col = col;
        this.piecesArrArr[row][col] = this.m_cur_click_stone;

        //3.更新位置
        var x =  col * Constant.cell_size - Constant.left_bottom_pos.len_x
        var y =  row * Constant.cell_size - Constant.left_bottom_pos.len_y;
        this.m_cur_click_stone.m_piecePrefab.setPosition(x, y);

        //4.走完棋子停止动作
        var prefab = this.m_cur_click_stone.m_piecePrefab;
        prefab.stopAllActions();
        prefab.scale = 1;
        this.m_cur_click_stone = null;
    },

    //初始化32颗棋子
    init32Stones: function(){

        //初始化棋子数组信息
        for(var row = 0; row <= 9; row++){
            this.piecesArrArr[row] = [];
            for(var col = 0; col <= 8; col++){
                this.piecesArrArr[row][col] = null; 
            }
        }

        //棋子初始化信息
        var game_board_init_info = Constant.game_board_init_info;

        for(var k in game_board_init_info){
            var stone_info = game_board_init_info[k];

            var row = stone_info.row;
            var col = stone_info.col;
            var turn_type = stone_info.turn_type;
            var stone_type = stone_info.stone_type;
            var piecePrefab = this.createOnePieceByName(Constant.stone_res_config[turn_type][stone_type]);

            //创建一颗棋子
            var stone = new Stone(turn_type, stone_type, false, row, col, piecePrefab); 
            
            var x =  col * Constant.cell_size - Constant.left_bottom_pos.len_x
            var y =  row * Constant.cell_size - Constant.left_bottom_pos.len_y;
            stone.m_piecePrefab.setPosition(x, y);
            this.node.addChild(stone.m_piecePrefab);
            
            //存储棋子信息
            this.piecesArrArr[row][col] = stone;
        } 
    },

    //根据棋子名称创建一颗棋子
    createOnePieceByName: function(pieceName){
        var piece = cc.instantiate(this.piecePrefab);
        piece.getComponent(cc.Sprite).spriteFrame = this.piecesAtlas.getSpriteFrame(pieceName);
        return piece;
    }
});
