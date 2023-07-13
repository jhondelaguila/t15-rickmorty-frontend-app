import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './base/home/home.component';
import { AboutComponent } from './base/about/about.component';
import { DetailsComponent } from './base/details/details.component';
import { CharactersComponent } from './base/characters/characters.component';
import { CharacterComponent } from './base/characters/character/character.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BaseComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
