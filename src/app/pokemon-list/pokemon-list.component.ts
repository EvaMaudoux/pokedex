import { Component, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 20;

  @Output() pokemonSelected = new EventEmitter<string>();

  constructor(private readonly _pokemonService: PokemonService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this._pokemonService.getPokemons(this.offset, this.limit).subscribe(data => {
      this.pokemons = data.results;
    });
  }

  nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  selectPokemon(pokemonName: string) {
    this.pokemonSelected.emit(pokemonName);
  }
}
