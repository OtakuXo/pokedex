import { useParams } from "react-router"
import { getCall } from "../utils/getCall";
import { useEffect, useState } from "react";
import { Contents } from "../components/pokemon/Contents";
import type { pokemonDetails } from "../types/pokemon";

export default function Pokemon() {
   const [pokemon, setPokemon] = useState<pokemonDetails | null>()
   const { name } = useParams();
   const api = `https://pokeapi.co/api/v2/pokemon/${name}`

   const fetchPokemon = async () => {
      const res = await getCall(api)
      setPokemon(res)
   }

   useEffect(() => {
      fetchPokemon()
   },[])

   if(pokemon == null) return
   return (
      <div>
         <Contents species={pokemon.species} forms={pokemon.forms} types={pokemon.types} />
      </div>
   )
}

