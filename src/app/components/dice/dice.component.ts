import { Component, OnInit , Inject} from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {  Player } from '../../shared/models/player';
import { CanvasService } from '../../shared/canvas.service';
import { Tile } from '../../shared/models/tile';
import { QuestionComponent} from '../../components/question/question.component'

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {


  round: number;
  number :any ;
  gameover :boolean;
  disabled :boolean =false;
  constructor(private canvas :CanvasService ,public dialog : MatDialog) { }

  ngOnInit() {}

  onStart(){
    
    this.round=0;//this give the chance to two players
    this.disabled = true;
    this.canvas.player1.turn = false;    
    this.canvas.player2.turn = true;
    

    this.canvas.player1.current =0;
    this.canvas.player1.tile = this.canvas.tiles[0];
    this.moveDice(this.canvas.player1);
    
    this.canvas.player2.current =0;
    this.canvas.player2.tile = this.canvas.tiles[0];
    this.moveDice(this.canvas.player2);
     

    
  }

  moveDice(player:Player){
    let ctx : CanvasRenderingContext2D = this.canvas.getCanvas();
    
    let index = player.current
    let x = (this.canvas.tiles[index].x)+25;
    let y = (this.canvas.tiles[index].y)+25;
    ctx.beginPath();
    ctx.arc(x,y,13,0,2*Math.PI);
    ctx.fillStyle=player.color;
    ctx.fill();
  }

  roll(){ 
    this.number =  Math.floor(Math.random() * Math.floor(6))+1;
    this.round +=1;

    this.openQuestion();

    //player 1s turn
    if(this.round%2 ==1){
      this.canvas.tiles[this.canvas.player1.current].draw(this.canvas.getCanvas());
      this.canvas.player1.current +=this.number;
      this.canvas.player1.turn = true;
      this.canvas.player2.turn = false;

    
      if(this.canvas.player1.current >=100){
        console.log('Game Over');
        this.canvas.player1.current=99
        this.moveDice(this.canvas.player1);
        this.gameover = true;
        this.disabled = false;   
        this.canvas.player1.turn = false;
        this.canvas.player2.turn = false;    //need to disable roll button
        this.number = "Game Over!"
      }else{
        this.moveDice(this.canvas.player1);
      }
    }else{
      this.canvas.tiles[this.canvas.player2.current].draw(this.canvas.getCanvas());
      this.canvas.player2.current +=this.number;
      this.canvas.player1.turn = false;
      this.canvas.player2.turn = true;
      
    
      if(this.canvas.player2.current >=100){
        this.canvas.player2.current=99
        this.moveDice(this.canvas.player2);
        this.gameover = true;
        this.disabled = false;       //need to disable roll button
        this.canvas.player1.turn = false;
        this.canvas.player2.turn = false; 
        this.number = "Game Over!"
      }else{
        this.moveDice(this.canvas.player2);
      }
    }
    
  }

  openQuestion() : void{
    let dialogRef = this.dialog.open(QuestionComponent,{
      width: '250px',
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
