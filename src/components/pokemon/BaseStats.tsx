import type { Stat } from "../../types/pokemon";

export default function BaseStats({ stats }: { stats: Stat[] }) {
   const getTotal = () => {
      let tmp = 0
      stats.map((i) => {
         tmp = tmp + i.base_stat
      })
      return tmp;
   }
   const total = getTotal()

   return (
      <div className="w-10/12 flex flex-col items-center  border-2 border-primaryForground rounded-2xl p-5">
         <h2 className="text-center text-3xl font-bold"> Base Stats</h2>
         <table className="rounded-xl">
            <thead>
               <tr>
                  <th className="p-5">name</th>
                  <th className="p-5">Stats</th>
                  <th className="p-5"></th>
                  <th className="p-5 hidden lg:table-cell">Min</th>
                  <th className="p-5 hidden lg:table-cell">Max</th>
               </tr>
            </thead>
            <tbody>
               {stats.map((i, index) => {
                  const stat = (i.base_stat * 100) / 255
                  const barColor = i.base_stat >= 0 && i.base_stat <= 29 ? "#DC3545" :
                     i.base_stat > 29 && i.base_stat <= 59 ? "#F19874" :
                        i.base_stat > 59 && i.base_stat <= 89 ? "#EFC245" :
                           i.base_stat > 89 && i.base_stat <= 119 ? "#86E892" :
                              i.base_stat > 119 && i.base_stat <= 149 ? "#47AF88" :
                                 i.base_stat > 149 && i.base_stat <= 255 && "#99CBE8"

                  //just to staisfy compiler
                  if (!barColor) return <div></div>

                  return (
                     <tr key={index}>
                        <td>{i.stat.name}</td>
                        <td>{i.base_stat}</td>
                        <td className="m-w-[80px] w-1/2"><div className={`  h-3 rounded-sm`} style={{ width: stat + "%", background: barColor }} /></td>
                        {i.stat.name == "hp" ? <td className="hidden lg:table-cell">{(2 * i.base_stat + 0 + 0) + 110}</td> : <td className="hidden lg:table-cell">{Math.floor(((2 * i.base_stat + 0 + 0) + 5) * 0.9)}</td>}
                        {i.stat.name == "hp" ? <td className="hidden lg:table-cell">{Math.floor(2 * i.base_stat + 31 + 252 / 4) + 110}</td> : <td className="hidden lg:table-cell">{Math.floor(((2 * i.base_stat + 31 + 252 / 4) + 5) * 1.1)}</td>}
                     </tr>
                  )
               })}
            </tbody>
            <tfoot>
               <tr>
                  <th className="p-5">Total</th>
                  <td className="p-5">{total}</td>
                  <td className="p-5"></td>
                  <td className="p-5 hidden lg:table-cell">Min</td>
                  <td className="p-5 hidden lg:table-cell">Max</td>
               </tr>
            </tfoot>
         </table>
      </div>
   )
}

