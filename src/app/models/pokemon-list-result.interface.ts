import { PokemonListItem } from "./pokemon-list-item.interface";

export interface PokemonListResult{
    count: number,
    next?: string,
    previous?: string,
    results: PokemonListItem[],
}