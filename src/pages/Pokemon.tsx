import { useParams } from "react-router"
import { getCall } from "../utils/getCall";
import { useEffect, useState } from "react";
import { Contents } from "../components/pokemon/Contents";
import type { pokemonDetails } from "../types/pokemon";
import BaseStats from "../components/pokemon/BaseStats";
import type { speciesDetails } from "../types/species";
import NotFound from "./NotFound";
import DexEntry from "../components/pokemon/DexEntry";
import EvolutionChart from "../components/pokemon/EvolutionChart";
import MovesComponent from "../components/pokemon/MovesComponent";

export default function Pokemon() {
   const { name } = useParams();

   const api = `https://pokeapi.co/api/v2/pokemon/${name}`
   const [pokemon, setPokemon] = useState<pokemonDetails>()
   const [pokemonSpeciesDetails, setPokemonSpieiesDetails] = useState<speciesDetails>()
   console.log(pokemonSpeciesDetails)


   useEffect(() => {
      const fetchPokemon = async () => {
         const res = await getCall(api)
         setPokemon(res)
      }

      fetchPokemon()
   }, [name])

   if (!pokemon || !name) return <NotFound />

   return (
      <div className="flex flex-col items-center gap-10 px-5">
         <Contents pokemon={pokemon} setPokemonSpectesDetails={setPokemonSpieiesDetails} />
         <BaseStats stats={pokemon.stats} />
         {pokemonSpeciesDetails && <EvolutionChart evolutionChain={pokemonSpeciesDetails.evolution_chain} />}
         {pokemonSpeciesDetails && <DexEntry pokemonSpeciesDetails={pokemonSpeciesDetails} />}
         {<MovesComponent moves={pokemon.moves} pokemonName={name} />}
      </div>
   )
}

