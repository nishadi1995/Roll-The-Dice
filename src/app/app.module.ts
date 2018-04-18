import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material/material.module';
import { Routes,RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BoardComponent } from './components/board/board.component';
import { CanvasService } from './shared/canvas.service';
import { DiceComponent } from './components/dice/dice.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes : Routes = [
  {path : 'game' , component: GameComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    DiceComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
