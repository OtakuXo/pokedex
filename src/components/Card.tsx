import { useEffect, useState } from "react";
import { getCall } from "../utils/getCall";
import { NavLink } from "react-router";
import type { pokemon, pokemonDetails } from "../types/pokemon";

// https://pokeapi.co/api/v2/pokemon

export default function Card({ pokemon }: { pokemon: pokemon }) {
   const [sprite, setSrpite] = useState<string>("/load.jpg")

   useEffect(() => {
      const fetchForms = async () => {
         const data: pokemonDetails = await getCall((pokemon.url || "https://pokeapi.co/api/v2/pokemon/1"))
         setSrpite(data.sprites.front_default)
      }
      fetchForms()
   }, [pokemon])

   return (
      <NavLink to={`/pokemon/${pokemon.name}`} className="min-w-[100px] bg-secondaryBackground hover:bg-primaryBackground w-1/7 flex flex-col items-center border border-secondaryForground rounded-xl">
         <img className="w-full" src={sprite} alt="pokemon image" />
         <p>{pokemon.name}</p>
      </NavLink>
   )
}

