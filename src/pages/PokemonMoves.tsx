import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { pokemonDetails } from "../types/pokemon";
import { getCall } from "../utils/getCall";
import NotFound from "./NotFound";
import MoveTable from "../components/pokemonMoves/MoveTable";
import Pagination from "../components/Pagination";

export const PokemonMoves = () => {
   const { name } = useParams();
   const api = `https://pokeapi.co/api/v2/pokemon/${name}`
   const [pokemon, setPokemon] = useState<pokemonDetails>()
   const [gameVersion, setGameVersion] = useState<string>("firered-leafgreen")
   const gameVersionArray: string[] = ["red-blue", "firered-leafgreen", "heartgold-soulsilver", "emerald", "omega-ruby-alpha-sapphire", "diamond-pearl", "platinum", "black-white", "black-2-white-2", "x-y", "sun-moon", "ultra-sun-ultra-moon", "sword-shield", "scarlet-violet"]


   useEffect(() => {
      const fetchPokemon = async () => {
         const res: pokemonDetails = await getCall(api)
         setPokemon(res)
      }

      fetchPokemon()
   }, [name])

   if (!pokemon) return <NotFound />


   return (
      <div className="flex flex-col items-center">
         <div className="flex items-center gap-[40px] mb-[40px]">
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <p className="text-[1.5rem]">Hello this page is dedicated to show all moves of pokemon {pokemon?.name}.</p>
         </div>
         <Pagination array={gameVersionArray} setGameVersion={setGameVersion} />
         <div className="flex flex-wrap justify-center gap-[40px] mt-[40px]">
            <MoveTable version={gameVersion} moves={pokemon.moves} moveLearnMethon="level-up" />
            <MoveTable version={gameVersion} moves={pokemon.moves} moveLearnMethon="machine" />
            <MoveTable version={gameVersion} moves={pokemon.moves} moveLearnMethon="tutor" />
            <MoveTable version={gameVersion} moves={pokemon.moves} moveLearnMethon="egg" />
         </div>
      </div>
   )
}

// firered-leafgreen
// scarlet-violet
