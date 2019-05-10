import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { Tile } from '../../shared/models/tile';
import { CanvasService } from '../../shared/canvas.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @ViewChild('mycanvas') canvasRef:ElementRef;
  ctx:CanvasRenderingContext2D 
  width:number =700;
  height : number = 700;

  constructor(private canvas :CanvasService) { }
  
  ngOnInit() {
    this.ctx=
      this.canvasRef.nativeElement.getContext('2d');
    
      this.canvas.setCanvas(this.ctx);
    

      let resolution = 70 ; //wh
      let cols = this.width/resolution;
      let rows =this.height/resolution;
      let dir =1; //direction of x

      let x = 0;
      let y = (rows-1)*resolution ; 

      for(let i=0 ; i<cols*rows ; i++){
        let tile =new Tile(x,y,resolution,i);
        this.canvas.tiles.push(tile);

        x = x + (resolution*dir);
        if( x >= this.width || x<= -resolution)
        {
          dir *=-1;
          x += resolution*dir ;
          y -= resolution ;
        }
      }

      for(let tile of this.canvas.tiles){
        tile.draw(this.ctx,tile);
      }
      

  }

  

  

  



}
