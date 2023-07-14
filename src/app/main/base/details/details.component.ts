import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../characters/database.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character:any = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const elementId:number = Number(params['id']);
      this.character = data.characters.filter(char => char.id === elementId);
      console.log(this.character);
      
    });
  }
}
