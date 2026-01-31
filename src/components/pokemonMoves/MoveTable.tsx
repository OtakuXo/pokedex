import type { Move } from "../../types/pokemon"
import MoveTableData from "./MoveTableData"

export default function MoveTable({ moves, version, moveLearnMethon }: { moves: Move[], version: string, moveLearnMethon: string }) {
   // moves.map(i=>i.version_group_details.map(j=>console.log(j.version_group)))
   console.log(moves)
   //filtering moves according to game version and how pokemon learns move 
   const filterdMoves = moves.map(i => {
      return (
         {
            move: i.move,
            version: i.version_group_details.find(j => j.version_group.name === version && j.move_learn_method.name === moveLearnMethon)
         }
      )
   }).filter(i => i.version !== undefined)

   if (filterdMoves.length < 1) return

   return (
      <div>
      <h2>{moveLearnMethon}</h2>
         <table>
            <thead>
               <tr>
                  {moveLearnMethon === "machine" ? <th>TM</th> : moveLearnMethon === "level-up" ? <th>Lv</th> : <th></th>}
                  <th>Move</th>
                  <th>Type</th>
                  <th>Cat.</th>
                  <th>pp</th>
                  <th>Pow.</th>
                  <th>Acc.</th>
               </tr>
            </thead>
            <tbody>
               {filterdMoves.map((i, index) => <MoveTableData key={index} move={i.move} versionDetails={i.version} moveLearnMethod={moveLearnMethon} />)}
            </tbody>
         </table >
      </div>
   )
}

