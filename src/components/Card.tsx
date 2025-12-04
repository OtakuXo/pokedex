import { useEffect, useState } from "react";
import type { forms, pokemon, pokemonDetails } from "../types";
import { getCall } from "../utils/getCall";
import { NavLink } from "react-router";

// https://pokeapi.co/api/v2/pokemon

export default function Card({ pokemon }: { pokemon: pokemon }) {
   const [spritsUrl, setSrpitsUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon/1")
   const [sprite, setSrpite] = useState<string>("/load.jpg")
   const [name, setName] = useState<string>("")

   useEffect(() => {
      const fetchForms = async () => {
         const data: pokemonDetails = await getCall((pokemon.url || "https://pokeapi.co/api/v2/pokemon/1"))
         data.forms.map(i => setSrpitsUrl(i.url))
         setName(data.name)
      }
      fetchForms()
   }, [pokemon])

   useEffect(() => {
      const fetchSprite = async () => {
         const data: forms = await getCall(spritsUrl);
         setSrpite(data.sprites.front_default)
      }
      fetchSprite()
   }, [spritsUrl])

   return (
      <div className="min-w-[100px] bg-secondaryBackground hover:bg-primaryBackground w-1/7 flex flex-col items-center border border-secondaryForground rounded-xl">
         <NavLink to={`pokemon/${pokemon.name}`}>
            <img className="w-full" src={sprite} alt="pokemon image" />
            <p>{name}</p>
         </NavLink>
      </div>
   )
}

