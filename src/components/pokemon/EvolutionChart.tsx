import { useEffect, useState } from "react";
import { getCall } from "../../utils/getCall";
import type { Evolution, EvolutionDetail } from "../../types/evolutionChain";
import type { EvolutionChain } from "../../types/species";
import type { FormsDetails } from "../../types/forums";
import { Link } from "react-router";

export default function EvolutEonChart({ evolutionChain }: { evolutionChain: EvolutionChain }) {
   const formApi = "https://pokeapi.co/api/v2/pokemon-form/"
   const [evolutionDetail, setEvolutionDetail] = useState<Evolution>()
   const [firstStageDetails, setFirstStageDetails] = useState<FormsDetails>()
   const [secondStageDetails, setSecondSgateDetails] = useState<FormsDetails[]>()
   const [thirdStageDetails, setThirdStageDetails] = useState<FormsDetails[]>()

   // i dont know what recurssion is
   const getEvolutionChain = async () => {
      const res: Evolution = await getCall(evolutionChain.url)
      setEvolutionDetail(res)

      const first: FormsDetails = await getCall(formApi + res.chain.species.name)
      setFirstStageDetails(first)

      const second = Promise.all(res.chain.evolves_to.map(async (i) => {
         const res: FormsDetails = await getCall(formApi + i.species.name)
         return res
      }))
      const secondData = await second
      setSecondSgateDetails(secondData)

      const third = Promise.all(res.chain.evolves_to.map(async (i) => {
         const res = Promise.all(i.evolves_to.map(async (j) => {
            const res: FormsDetails = await getCall(formApi + j.species.name)
            return res
         }))
         return await res
      }))

      const thirdData = await third
      thirdData.map(i => setThirdStageDetails(i))
   }

   useEffect(() => {
      getEvolutionChain()
   }, [evolutionChain])


   if (!evolutionDetail || !firstStageDetails || !secondStageDetails || !thirdStageDetails) return <div> </div>

   return (
      <div className="w-full">
         <h2>Evolution Chart</h2>
         <div className="w-full flex flex-wrap justify-center gap-2">
            <div>
               <ShowEvolutionStages formsDetails={firstStageDetails} evolutionDetails={evolutionDetail.chain.evolution_details[0]} />
            </div>
            <div>
               {secondStageDetails.map((i, index) => <ShowEvolutionStages formsDetails={i} evolutionDetails={evolutionDetail.chain.evolves_to.map((j,) => j.evolution_details[0])[index]} key={i.id} />)}
            </div>
            <div>
               {thirdStageDetails.map((i) => <ShowEvolutionStages formsDetails={i} evolutionDetails={evolutionDetail.chain.evolution_details[0]} key={i.id} />)}
            </div>
         </div>
      </div>
   )
}

function ShowEvolutionStages({ formsDetails, evolutionDetails }: { formsDetails: FormsDetails, evolutionDetails: EvolutionDetail }) {
   const condtion = evolutionCondition(evolutionDetails)
   return (
      <div className="w-1/5 min-w-40">
         <Link to={`/pokemon/${formsDetails.name}`}><img className=" w-full bg-secondaryBackground rounded-2xl" src={formsDetails.sprites.front_default} alt={formsDetails.name} /></Link>
         <ol>
            <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">National No:</span> {formsDetails.id}</li>
            <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">Name:</span> {formsDetails.name}</li>
            <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">Type:</span> <span>{formsDetails.types.map((i) => <button key={i.slot}>{i.type.name}</button>)}</span></li>
            <li className="grid grid-cols-2"><span className="font-bold mr-2 text-end ">Condtion:</span> {condtion.toString()}</li>
         </ol>
      </div>
   )

}

function evolutionCondition(evolutionDetails: EvolutionDetail) {
   console.log(evolutionDetails)
   if (evolutionDetails == undefined) return "sorry something went wrong"

   const evolutionCondition = evolutionDetails?.location ? "location " + evolutionDetails.location.name :
      evolutionDetails.item ? "use item " + evolutionDetails.item.name :
         evolutionDetails.held_item ? "held item " + evolutionDetails.held_item.name :
            evolutionDetails.gender ? evolutionDetails.gender :
               evolutionDetails.min_level ? "min level " + evolutionDetails.min_level :
                  evolutionDetails.min_happiness ? "min happiness " + evolutionDetails.min_happiness :
                     evolutionDetails.min_beauty ? "min beauty" + evolutionDetails.min_beauty :
                        evolutionDetails.known_move ? "knows " + evolutionDetails.known_move.name :
                           evolutionDetails.known_move_type ? "knows " + evolutionDetails.known_move_type.name + " type move" :
                              evolutionDetails.time_of_day ? "time " + evolutionDetails.time_of_day :
                                 evolutionDetails.trade_species ? evolutionDetails.trade_species :
                                    evolutionDetails.needs_overworld_rain ? evolutionDetails.needs_overworld_rain :
                                       evolutionDetails.relative_physical_stats ? evolutionDetails.relative_physical_stats :
                                          evolutionDetails.region_id ? evolutionDetails.region_id :
                                             evolutionDetails.party_type ? evolutionDetails.party_type :
                                                evolutionDetails.party_species ? evolutionDetails.party_species :
                                                   evolutionDetails.trigger && evolutionDetails.trigger.name
   return evolutionCondition

}

