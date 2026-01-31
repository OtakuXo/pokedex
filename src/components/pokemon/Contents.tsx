import { useEffect, useState } from "react"
import { getCall } from "../../utils/getCall"
import type { speciesDetails } from "../../types/species"
import type { pokemonDetails } from "../../types/pokemon"
import { TwoColumnList } from "../TwoColumnList"

export const Contents = ({ pokemon, setPokemonSpectesDetails }: { pokemon: pokemonDetails, setPokemonSpectesDetails: React.Dispatch<speciesDetails> }) => {
   const [speciesDetails, setSpieiesDetails] = useState<speciesDetails>()

   useEffect(() => {
      const getSpecies = async () => {
         const res = await getCall(pokemon.species.url)
         setSpieiesDetails(res)
         setPokemonSpectesDetails(res)
      }
      getSpecies()
   }, [pokemon])

   return (
      <div className="w-10/12 rounded-2xl">
         <strong className="text-center">
            {speciesDetails?.flavor_text_entries[0].flavor_text}
         </strong>
         <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div>
               <img className="w-[30vw] min-w-36 bg-secondaryBackground rounded-2xl" src={pokemon?.sprites.front_default} alt="hello" />
            </div>
            <div className="flex flex-wrap justify-center gap-5">
               <div>
                  <h4 className="font-bold text-xl mt-4 text-center">Pokedex Data</h4>
                  <ol className="">
                     <TwoColumnList label={"National No"} ><span>{speciesDetails?.id}</span></TwoColumnList>
                     <TwoColumnList label={"Type"} ><span>{pokemon.types.map((i) => <button className="mr-2" key={i.slot}>{i.type?.name}</button>)}</span></TwoColumnList>
                     <TwoColumnList label={"Species"} ><span>{pokemon.species.name}</span></TwoColumnList>
                     <TwoColumnList label={"Height"} ><span>{pokemon.height}</span></TwoColumnList>
                     <TwoColumnList label={"Weight"} ><span>{pokemon.weight}</span></TwoColumnList>
                     <TwoColumnList label={"Abalities"} ><span>{pokemon.abilities.map((i) => <button className="mr-2" key={i.slot}>{i.ability?.name}</button>)}</span></TwoColumnList>
                     <TwoColumnList label={"Weight"} ><span>{pokemon.weight}</span></TwoColumnList>
                     <TwoColumnList label={"Dex No"} ><ol>{speciesDetails?.pokedex_numbers.map((i, index) => <li key={index}>{i.entry_number} ({i.pokedex.name})</li>)}</ol></TwoColumnList>
                  </ol>
               </div>
               <div>
                  <div>
                     <h4 className="font-bold text-xl mt-4 text-center">Traning</h4>
                     <ol className="">
                        <TwoColumnList label={"Capture Rate"} ><span>{speciesDetails?.capture_rate}</span></TwoColumnList>
                        <TwoColumnList label={"Base happiness"} ><span>{speciesDetails?.base_happiness}</span></TwoColumnList>
                        <TwoColumnList label={"Base Experience"} ><span>{pokemon.base_experience}</span></TwoColumnList>
                        <TwoColumnList label={"Growth Rate"} ><span>{speciesDetails?.growth_rate.name}</span></TwoColumnList>
                     </ol>
                  </div>
                  <div>
                     <h4 className="font-bold text-xl mt-4 text-center">Breeding</h4>
                     <ol className="">
                        <TwoColumnList label={"Hatch Counter"} ><span>{speciesDetails?.hatch_counter}</span></TwoColumnList>
                        <TwoColumnList label={"Egg group"} ><span>{speciesDetails?.egg_groups.map((i) => <button className="mr-2" key={i.name}>{i.name}</button>)}</span></TwoColumnList>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
