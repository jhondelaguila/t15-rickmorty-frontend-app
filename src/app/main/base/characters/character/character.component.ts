import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() listaCharacters:any[] = [];
  firstRow:any = [];
  secondRow:any = [];
  i:number = 1;

  ngOnInit(){
    for (let index = 0; index < 4; index++) {
      this.firstRow.push(this.listaCharacters[index]);
      this.secondRow.push(this.listaCharacters[index+4]);
    }
  }

}
