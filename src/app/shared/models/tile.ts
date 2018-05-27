export class Tile {

    x:number; y:number;
    wh:number;//resolution
    next:number;//next tile in line.
    color:any;
    index : number;

    //each rectangle in the board has the tile features
    constructor(x,y,wh,index){
        this.x = x ;
        this.y = y ;
        this.wh = wh ;
        this.index = index ;
        this.next = index+1 ;
        
        if(this.index %2 == 0){
            this.color = '#0091EA';
        }else{
            this.color = '#FFFFFF' ;
        }

    }

    draw(ctx:CanvasRenderingContext2D ){//draw the tile
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x, this.y, this.wh, this.wh);
        ctx.fillStyle='#111111';
        ctx.font="bold 13px Arial";
        ctx.fillText((this.index+1).toString(),(this.x),(this.y+20));
    }
}
