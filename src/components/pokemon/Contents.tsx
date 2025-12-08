import { useEffect, useState } from "react"
import { getCall } from "../../utils/getCall"
import type { speciesDetails } from "../../types/species"
import type { FormsDetails } from "../../types/forums"
import type { pokemonDetails } from "../../types/pokemon"

export const Contents = ({ pokemon }: { pokemon: pokemonDetails }) => {
   const [speciesDetails, setSpieiesDetails] = useState<speciesDetails>()
   const [formsDetails, setFormsDetails] = useState<FormsDetails>()

   const getSpecies = async () => {
      const res = await getCall(pokemon.species.url)
      setSpieiesDetails(res)
   }
   const getForms = async () => {
      const res = await getCall(pokemon.forms[0].url)
      setFormsDetails(res)

   }

   useEffect(() => {
      getSpecies()
      getForms()
   }, [])

   return (
      <div className="w-10/12  border-2 border-primaryForground rounded-2xl p-5">
         <strong>
            {speciesDetails?.flavor_text_entries[0].flavor_text}
         </strong>
         <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div>
               <img className="w-[30vw] min-w-36 bg-secondaryBackground rounded-2xl" src={formsDetails?.sprites.front_default} alt="hello" />
            </div>
            <div className="flex flex-wrap">
               <div>
                  <h4 className="font-bold text-xl mt-4 text-center">Pokedex Data</h4>
                  <ol className="">
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">National No:</span> {speciesDetails?.id}</li>
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Type:</span> <span>{pokemon?.types.map((i) => <button className="mr-2" key={i.slot}>{i.type?.name}</button>)}</span></li>
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Species:</span>{pokemon?.species.name}</li>
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Height:</span>{pokemon?.height}</li>
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Weight:</span>{pokemon?.weight}</li>
                     <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Abalities:</span> <span>{pokemon?.abilities.map((i) => <button className="mr-2" key={i.slot}>{i.ability?.name}</button>)}</span></li>
                     <li className="grid grid-cols-2 items-center"><span className="font-bold mr-2 text-end">Dex No:</span> <ol>{speciesDetails?.pokedex_numbers.map((i, index) => <li key={index}>{i.entry_number} ({i.pokedex.name})</li>)}</ol></li>
                  </ol>
               </div>
               <div>
                  <div>
                     <h4 className="font-bold text-xl mt-4 text-center">Traning</h4>
                     <ol className="">
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Capture Reate</span>: {speciesDetails?.capture_rate}</li>
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Base happiness</span>: {speciesDetails?.base_happiness}</li>
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Base Exp</span>: {pokemon?.base_experience}</li>
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">Growth Rate</span>: {speciesDetails?.growth_rate.name}</li>
                     </ol>
                  </div>
                  <div>
                     <h4 className="font-bold text-xl mt-4 text-center">Breeding</h4>
                     <ol className="">
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Hatch Counter:</span> {speciesDetails?.hatch_counter}</li>
                        <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end">Local No:</span> <span>{speciesDetails?.egg_groups.map((i) => <button className="mr-2" key={i.name}>{i.name}</button>)}</span></li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
