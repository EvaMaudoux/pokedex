import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly _http: HttpClient) {}

  getPokemons(offset: number, limit: number): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }
}
