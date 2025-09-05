import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonItem } from '../models/pokemon-item.interface';

@Component({
  selector: 'app-pokemon-item',
  imports: [],
  templateUrl: './pokemon-item.html',
  styleUrl: './pokemon-item.scss'
})
export class PokemonItemComponent implements OnInit {

  private readonly _pokeService : PokemonService = inject(PokemonService)

  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  protected _poke : WritableSignal<PokemonItem | undefined> = signal(undefined)

  ngOnInit(): void {
    let id: number = +this._activatedRoute.snapshot.params['id']

    this._pokeService.getPokemonById(id).subscribe({
      next: (value : PokemonItem) => {
        this._poke.set(value)
      },
      error : (err) => {

      } 
    })
  }
  
}
