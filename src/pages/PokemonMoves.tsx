import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { pokemonDetails } from "../types/pokemon";
import { getCall } from "../utils/getCall";
import NotFound from "./NotFound";
import MoveTable from "../components/pokemonMoves/MoveTable";

export const PokemonMoves = () => {
   const { name } = useParams();
   const api = `https://pokeapi.co/api/v2/pokemon/${name}`
   const [pokemon, setPokemon] = useState<pokemonDetails>()


   useEffect(() => {
      const fetchPokemon = async () => {
         const res: pokemonDetails = await getCall(api)
         setPokemon(res)
      }

      fetchPokemon()
   }, [name])

   if (!pokemon) return <NotFound />


   return (
      <div>
         <div className="flex flex-wrap justify-center gap-[40px]">
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <p>hello this page is dedicated to show all moves of pokemon {pokemon?.name}.</p>
         </div>
         <div className="flex flex-wrap justify-center gap-[40px]">
         pagination
         </div>
         <div className="flex flex-wrap justify-center gap-[40px]">
               <MoveTable version='firered-leafgreen' moves={pokemon.moves} moveLearnMethon="level-up" />
               <MoveTable version='firered-leafgreen' moves={pokemon.moves} moveLearnMethon="machine" />
               <MoveTable version='firered-leafgreen' moves={pokemon.moves} moveLearnMethon="tutor" />
               <MoveTable version='firered-leafgreen' moves={pokemon.moves} moveLearnMethon="egg" />
         </div>
      </div>
   )
}

// firered-leafgreen
// scarlet-violet
