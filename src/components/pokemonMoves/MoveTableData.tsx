import { useEffect, useState } from "react";
import type { VersionGroupDetail } from "../../types/pokemon";
import { getCall } from "../../utils/getCall";
import type { moveDetails } from "../../types/moves";
import type { Species } from "../../types/species";

export default function MoveTableData({ move, versionDetails, moveLearnMethod }: { move: Species, versionDetails: VersionGroupDetail | undefined, moveLearnMethod:string }) {
   const [moveDetails, setMoveDetails] = useState<moveDetails>()

   useEffect(() => {
   const getMoveDetails = async () => {
      const res = await getCall(move.url)
      setMoveDetails(res)
   }

      getMoveDetails()
   }, [move])

   return (
      <tr>
         <td>{moveLearnMethod === "machine" ? moveDetails?.id  :versionDetails?. level_learned_at}</td>
         <td>{moveDetails?.name}</td>
         <td>{moveDetails?.type.name}</td>
         <td>{moveDetails?.damage_class.name}</td>
         <td>{moveDetails?.pp}</td>
         <td>{moveDetails?.power}</td>
         <td>{moveDetails?.accuracy}</td>
      </tr>
   )
}

