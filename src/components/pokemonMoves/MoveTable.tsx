import type { Move } from "../../types/pokemon"
import MoveTableData from "./MoveTableData"

export default function MoveTable({ moves, version, moveLearnMethon }: { moves: Move[], version: string, moveLearnMethon: string }) {
   // moves.map(i=>i.version_group_details.map(j=>console.log(j.version_group)))
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
   //IDK the error from compiler. it clearly says version cannot be undefined  in line 16 
   //moves learned form machines are alredy sorted which has level learned at 0 and tutor and egg moves dont need to be sorted so only moves learned by leveling are sorted 
   const sorted = filterdMoves.sort((a, b)=> a.version?.level_learned_at - b.version?.level_learned_at )

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
               {sorted.map((i, index) => <MoveTableData key={index} move={i.move} versionDetails={i.version} moveLearnMethod={moveLearnMethon} />)}
            </tbody>
         </table >
      </div>
   )
}

