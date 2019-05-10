import { Injectable } from '@angular/core';
import { Player } from './models/player';

@Injectable()
export class CanvasService {

  tiles :any =[];
  player1:Player;
  player2:Player;
  round : number;
  ctx:CanvasRenderingContext2D;
  constructor() { }

  setCanvas(ctx:CanvasRenderingContext2D){
    this.ctx =ctx;
  }

  getCanvas():CanvasRenderingContext2D {
    return this.ctx;
  }

  //Initiate the two players
  initPlayer(name1 , name2){
    this.player1 = new Player(name1,"#B71C1C");
    this.player2 = new Player(name2 , '#4A148C');
    this.round =0;
  }

  openQuestion(){
    
  }
}
