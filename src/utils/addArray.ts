import type { Stat } from "../types/pokemon"

export const addArray = ({ stats }: { stats: Stat[] }) => {
   stats.map((i) => {
      let tmp = 0
      tmp + i.base_stat
      return tmp;
   })
   return
}
