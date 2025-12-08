import { useEffect, useState } from "react";
import Card from "./components/Card"
import { getCall } from "./utils/getCall";
import type { pokemon } from "./types/pokemon";
import type { baseApiResponse } from "./types/baseApi";

function App() {
   const [pokemon, setPokemon] = useState<pokemon[]>([{ name: "", url: "" }]);
   const [limit, setLimit] = useState<number>(20);

   const api = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`

   useEffect(() => {
      const fetchPokemons = async () => {
         const data: baseApiResponse = await getCall(api)
         setPokemon(data.results)
      }
      fetchPokemons()
   }, [limit])

   return (
      <div>
         <div className="flex flex-wrap justify-center gap-2 ">
            {pokemon.map((i) => {
               return <Card pokemon={i} key={i.url} />
            })}
         </div>

         <div className="flex justify-center pt-10 ">
            <button className="bg-color1 hover:bg-color2 text-color2 text-2xl font-bold  p-1.5 " onClick={() => setLimit(limit + 20)}>Load more</button>
         </div>
      </div>
   )
}


export default App

