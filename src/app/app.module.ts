import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material/material.module';
import { Routes,RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BoardComponent } from './components/board/board.component';
import { CanvasService } from './shared/canvas.service';
import { DiceComponent } from './components/dice/dice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InitComponent } from './components/init/init.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionService } from './shared/question.service';

const routes : Routes = [
  {
    path       : '',
    component : InitComponent
  },
  
  {
  path : 'game' ,
  component : GameComponent
  },
  {
      path       : '',
      redirectTo : '',
      pathMatch  : 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    DiceComponent,
    NavbarComponent,
    InitComponent,
    QuestionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents: [QuestionComponent,DiceComponent],
  providers: [CanvasService,QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
