import { useEffect, useState } from "react"
import { getCall } from "../../utils/getCall"
import type { Species, speciesDetails } from "../../types/species"
import type { Forms, FormsDetails } from "../../types/forums"
import type { Type } from "../../types/pokemon"

export const Contents = ({ species, forms, types }: { species: Species, forms: Forms[], types: Type[] }) => {
   const [speciesDetails, setSpieiesDetails] = useState<speciesDetails>()
   const [formsDetails, setFormsDetails] = useState<FormsDetails>()

   const getSpecies = async () => {
      const res = await getCall(species.url)
      setSpieiesDetails(res)
   }
   const getForms = async () => {
      const res = await getCall(forms[0].url)
      setFormsDetails(res)

   }
   console.log(types)

   useEffect(() => {
      getSpecies()
      getForms()
   }, [])

   return (
      <div>
         <img src={formsDetails?.sprites.front_default} alt="hello" />
         <p>
            {speciesDetails?.flavor_text_entries[0].flavor_text}
         </p>
         <div className="flex gap-1">
            {types.map((i) => <button key={i.slot}>{i.type.name}</button>)}
         </div>
      </div>
   )
}
