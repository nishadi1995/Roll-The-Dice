import { Tile } from "./tile";

export class Player {

    name:string
    current:number;
    tile:Tile; //current tile of the player
    color:string;
    turn:boolean;

    constructor(name,color){
        this.current =0;
        this.name= name;
        this.color=color;
        this.turn = true;
    }



}

