import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';  // Importation du modèle

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() selectedPokemon: string = '';  // Le nom du Pokémon sélectionné
  pokemonDetails: Pokemon | null = null;  // Utilisation du modèle Pokemon
  defaultImage: string = 'assets/images/sacha-image.png';  // Image par défaut

  constructor(private readonly _pokemonService: PokemonService) {}

  loadPokemonDetails(pokemonName: string): void {
    if (pokemonName) {
      this._pokemonService.getPokemonDetails(pokemonName).subscribe((data: Pokemon) => {
        this.pokemonDetails = data;
      });
    }
  }
}
