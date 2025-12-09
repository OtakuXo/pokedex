import type { speciesDetails } from "../../types/species";

export default function DexEntry({ pokemonSpeciesDetails }: { pokemonSpeciesDetails: speciesDetails }) {
   return (
      <div>
         <h2>Pokedex entry</h2>
         <table>
            <thead>
               <tr>
                  <th>game</th>
                  <th>text</th>
               </tr>
            </thead>
            <tbody>
               {
                  pokemonSpeciesDetails.flavor_text_entries.map((i, index) => {
                     if(i.language.name != "en"){return<tr className="hidden" key={index}></tr>}
                     return (
                        <tr key={index}>
                           <td>{i.version.name}</td>
                           <td>{i.flavor_text}</td>
                        </tr>

                     )
                  })
               }
            </tbody>
         </table>
      </div>
   )
}

