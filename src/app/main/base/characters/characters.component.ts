import { Component,OnInit } from '@angular/core';
import data from './database.json';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:any = [];

  ngOnInit(){
    this.characters = data.characters;
  }
}
