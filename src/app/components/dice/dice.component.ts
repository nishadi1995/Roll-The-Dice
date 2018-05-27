import { Component, OnInit , Inject} from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material';

import {  Player } from '../../shared/models/player';
import { CanvasService } from '../../shared/canvas.service';
import { Tile } from '../../shared/models/tile';
import { QuestionComponent} from '../../components/question/question.component'
import { QuestionService, question } from '../../shared/question.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  questionData :any =[];
  round: number;
  number :any ;
  gameover :boolean;
  disabled :boolean =false;
  constructor(private canvas :CanvasService, private qtnService : QuestionService, public dialog : MatDialog) { }

  ngOnInit() {}

  onStart(){
    
    this.round=1;//this give the chance to two players
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
    //generate random number from the dice
    let number = Math.floor(Math.random() * Math.floor(6))+1;
    this.number = number;

    if(this.round%2 == 1){//player 1
      this.play(number,this.canvas.player1,this.canvas.player2);
    }else{//player 2
      this.play(number,this.canvas.player2,this.canvas.player2);
      
    }
    //after everything
  }

  play(number,player,opponant){

    let no = (Math.floor((Math.random() * 10) +1));
    //question pop up
    this.qtnService.getQuestion().subscribe(
      datas=>{
        console.log(datas);
        let dialogRef = this.dialog.open(QuestionComponent,{
          width : '500px',
          data  : {
            question : datas[no].question,
            options  : datas[no].options,
          }
        });

        dialogRef.afterClosed().subscribe(result=>{
          if(result == datas[no].answer){
            //answer is correct dice up
            this.canvas.tiles[player.current].draw(this.canvas.getCanvas());//clean the cirrent tile.
            player.current += number;

            //check wheher the current is 99 --> 100th tile
            if(player.current >= 99){
              player.current == 99;
              this.gameover = true;
              this.number = 'Game Over';
            }
            this.moveDice(player); // draw the dice on current tile


            //next player's chance
            this.round +=1;
            player.turn = true;
            opponant.turn = false;
            
          }else{
            this.round +=1;
            player.turn = false;
            opponant.turn = true;
            //answer is incorrect next player

          }
        })



    //question service ends here
     });
  }

}
    
