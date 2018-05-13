import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuestionService, Question } from '../../shared/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question , private qtnService: QuestionService) {}

  
  ngOnInit(){
    this.getQuestion();
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getQuestion(){
    this.qtnService.getQuestion().
    subscribe(
      data=>{this.data = data}
    );
  }

  

}