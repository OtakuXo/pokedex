export default function Pagination({array, setGameVersion}: {array: string[], setGameVersion: React.Dispatch<string>}) {
  return (
     <div className="flex flex-wrap justify-center" >
     {
        array.map((i, index)=>{
           return (
              <button key={index} onClick={() => setGameVersion(i)}>{i}</button>
           )
        })
     }
     </div>
  )
}

