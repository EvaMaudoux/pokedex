import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    PokedexComponent,
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
  ]
})
export class PokedexModule { }
