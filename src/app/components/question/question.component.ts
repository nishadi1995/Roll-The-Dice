import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { QuestionService, question } from '../../shared/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private qtnService: QuestionService) {}

  answer:string

  ngOnInit(){}

  
  onSubmit(){
    if(this.answer == this.data.answer){
      this.qtnService.correctAnswer = true;
    }
    this.dialogRef.close();
  }

}