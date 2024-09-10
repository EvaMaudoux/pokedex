import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';  // Importation du PokedexComponent

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },  // Redirection par défaut vers la page Pokedex
  { path: 'pokedex', component: PokedexComponent }          // Route pour afficher le Pokedex
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
