import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonListResult } from '../models/pokemon-list-result.interface';
import { PokemonItem } from '../models/pokemon-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _baseUrl = "https://pokeapi.co/api/v2/";

  private readonly _http : HttpClient = inject(HttpClient)

  getBestGeneration(): Observable<PokemonListResult>{
    return this._http.get<PokemonListResult>(this._baseUrl + "pokemon?limit=151").pipe(
      map((poke : PokemonListResult) => {
        
        poke.results = poke.results.map(x => {

          let strId : string = x.url.substring(0, x.url.length - 1)

          strId = strId.substring(strId.lastIndexOf("/") + 1)

          return {
            // creer une copie clé valeur de l'objet x
            ...x,
            id: +strId
          }
        })

        return poke;
      })
    )
    
  }

  getPokemonById(id : number): Observable<PokemonItem>{
    return this._http.get<PokemonItem>(this._baseUrl + "pokemon/" + id)
  }
  
}
