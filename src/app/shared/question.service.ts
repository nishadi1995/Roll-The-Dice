import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface question {
  question : string,
  options : string[],
  answer : string
}

@Injectable()
export class QuestionService {

  constructor(private http : HttpClient) { }

  configUrl = 'assets/database/qtn.json';
  public correctAnswer : boolean = false;

  getQuestion():Observable<question>{
    return this.http.get<question>(this.configUrl);   
  }

}


// if(this.round%2 == 1){
//   this.canvas.player1.turn = true;//next chance is player 2
//   this.canvas.player2.turn = false; 
// }else{
//   this.canvas.player1.turn = false; //next chance is palyer 1
//   this.canvas.player2.turn = true;
// }
// }

// diceNumbers(player){//get a random number
// this.number =  Math.floor(Math.random() * Math.floor(6))+1;
// player.current+=this.number; 
// }

// roll(){
// if(this.round%2 == 1){
//   this.diceNumbers(this.canvas.player1);  
// }else{
//   this.diceNumbers(this.canvas.player2);
// }

// //pop up a question
// let number = (Math.floor((Math.random() * 10) + 1));

// this.qtnService.getQuestion().
// subscribe(
//   data=>{
//     this.questionData = data
//   }
// );

// let dialogRef = this.dialog.open(QuestionComponent,{
//   width: '500px',
//   //data : this.questionData
//   data : {
//     question: this.questionData[0].question,
//     options : this.questionData[0].options,
//     answer : this.questionData[0].answer
//   }
// });

// dialogRef.afterClosed().subscribe(result => {
//   console.log('The dialog was closed');
// });

// return this.qtnService.correctAnswer;
// this.nextPlayer();
// this.round+=1;


// }
// rollon(){ 
// console.log(this.round);
// this.number =  Math.floor(Math.random() * Math.floor(6))+1;

// //returns a boolean -> if true->player gets another chance
//                               //false->next players turn
// //player 1s turn
// if(this.round%2 ==1){
//   console.log('roll');

//   this.canvas.player1.turn = true;//next chance is player 2
//   this.canvas.player2.turn = false;

//   let turn = this.openQuestion();

//   this.canvas.tiles[this.canvas.player1.current].draw(this.canvas.getCanvas());
//   this.canvas.player1.current +=this.number;

//   if(this.canvas.player1.current >=100){
//     console.log('Game Over');
//     this.canvas.player1.current=99
//     this.moveDice(this.canvas.player1);
//     this.gameover = true;
//     this.disabled = false;   
//     this.canvas.player1.turn = true;
//     this.canvas.player2.turn = false;    //need to disable roll button
//     this.number = "Game Over!"
//   }else {
//     this.moveDice(this.canvas.player1);
//   }

// }else{
//   this.canvas.player1.turn = false;
//   this.canvas.player2.turn = true;
//   let turn = this.openQuestion();
//   this.canvas.tiles[this.canvas.player2.current].draw(this.canvas.getCanvas());
//   this.canvas.player2.current +=this.number;

//   if(this.canvas.player2.current >=100){
//     this.canvas.player2.current=99
//     this.moveDice(this.canvas.player2);
//     this.gameover = true;
//     this.disabled = false;       //need to disable roll button
//     this.canvas.player1.turn = false;
//     this.canvas.player2.turn = false; 
//     this.number = "Game Over!"
//   }else {
//     this.moveDice(this.canvas.player2);
//   }
// }


// }

// openQuestion() : boolean{

// let number = (Math.floor((Math.random() * 10) + 1));

// this.qtnService.getQuestion().
// subscribe(
//   data=>{
//     this.questionData = data
//   }
// );

// let dialogRef = this.dialog.open(QuestionComponent,{
//   width: '500px',
//   //data : this.questionData
//   data : {
//     question: this.questionData[0].question,
//     options : this.questionData[0].options,
//     answer : this.questionData[0].answer
//   }
// });

// dialogRef.afterClosed().subscribe(result => {
//   console.log('The dialog was closed');
// });

// return this.qtnService.correctAnswer;
// }

// getQuestion(){

// }

// }
