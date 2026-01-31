import { NavLink } from "react-router";
import type { Move } from "../../types/pokemon";

export default function MovesComponent({ moves, pokemonName }: { moves: Move[], pokemonName: string }) {
   return (
      <div>
         <h2>moves learnt by {pokemonName}</h2>
         <NavLink to={`/moves/${pokemonName}`} >go to moves page</NavLink>
         <div className="flex justify-center" >
            <table>
               <thead>
                  <tr>
                     <th>Lv</th>
                     <th>Move</th>
                  </tr>
               </thead>
               <tbody>
                  {moves.map((i, index) =>
                     i.version_group_details.map((j) => {
                        if (j.version_group.name === "firered-leafgreen" && j.move_learn_method.name === "level-up" && j.order === null) {
                           return (
                              <tr key={index} >
                                 <td>{j.level_learned_at}</td>
                                 <td>{i.move.name}</td>
                              </tr>
                           )
                        }
                     })
                  )}
               </tbody>
            </table >
         </div >
      </div >
   )
}

