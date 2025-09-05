import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonItemComponent } from './pokemon-item/pokemon-item';

export const routes: Routes = [
    //Eager loading
    {path : 'list', component: PokemonList},
    {path : 'detail/:id', component: PokemonItemComponent}
];
