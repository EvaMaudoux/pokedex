import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  selectedPokemon: string = '';  // Le nom du Pokémon sélectionné

  onPokemonSelected(pokemonName: string) {
    this.selectedPokemon = pokemonName;
  }
}
