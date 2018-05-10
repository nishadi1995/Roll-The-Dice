import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Form ,FormBuilder ,FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CanvasService } from '../../shared/canvas.service';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  hidden:boolean =false; //hide the welcome page
  players : FormGroup;
  constructor(private fb : FormBuilder , private router:Router ,private canvasService:CanvasService) {
    this.players = fb.group({
      player1:[null,Validators.required],
      player2 : [null , Validators.required]
    });
   }
   ngOnInit(){}

  onPlay(players){
    this.hidden = true;
    this.canvasService.initPlayer(players.player1 , players.player2);
    this.router.navigate(['game']);
  }

}
