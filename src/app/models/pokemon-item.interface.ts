import { PokemonSprite } from "./pokemon-sprite.interface";

export interface PokemonItem{
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: PokemonSprite,
}