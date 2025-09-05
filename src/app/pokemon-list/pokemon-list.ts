import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PokemonListResult } from '../models/pokemon-list-result.interface';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterLink],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList implements OnInit {

   protected readonly pokemonListResult : WritableSignal<PokemonListResult | undefined> = signal(undefined)

  private readonly _pokeService : PokemonService = inject(PokemonService)

  ngOnInit(): void {
    
    this._pokeService.getBestGeneration().subscribe({
      next : (data: PokemonListResult) => {
        this.pokemonListResult.set(data)
        console.log(this.pokemonListResult()?.results[0]);
        
      },
      error : (err) => {
        console.error("ALEEEEEEEEEEEEEEEEEEEEEEED")
        console.error(err)
        console.error("FIN ALEEEEEEEEEEEEEEEEEEEEEEED")
      }
    });

  }


}
