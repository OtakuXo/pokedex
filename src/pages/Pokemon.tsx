import { useParams } from "react-router"
import { getCall } from "../utils/getCall";
import { useEffect, useState } from "react";
import { Contents } from "../components/pokemon/Contents";
import type { pokemonDetails } from "../types/pokemon";
import BaseStats from "../components/pokemon/BaseStats";

export default function Pokemon() {
   const [pokemon, setPokemon] = useState<pokemonDetails | null>()
   const { name } = useParams();
   const api = `https://pokeapi.co/api/v2/pokemon/${name}`
   console.log(pokemon)

   const fetchPokemon = async () => {
      const res = await getCall(api)
      setPokemon(res)
   }

   useEffect(() => {
      fetchPokemon()
   }, [])

   if (pokemon == null) return
   return (
      <div className="flex flex-col items-center gap-10">
         <Contents pokemon={pokemon} />
         <BaseStats stats={pokemon.stats}/>
      </div>
   )
}

