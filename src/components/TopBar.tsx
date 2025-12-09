import { useState } from "react"
import { useNavigate } from "react-router"

export default function TopBar() {
   const navigate = useNavigate()
   const [search, setSearch] = useState<string>('')

   const formEvent = (e:React.FormEvent<HTMLFormElement> )=>{
      e.preventDefault()
      navigate(`/pokemon/${search}`)
   }
  return (
    <div className="bg-secondaryBackground text-primaryForground font-bold  min-w-screen h-20 flex justify-center items-center">
       <form onSubmit={(e)=> formEvent(e)}>
         <label htmlFor="search">search</label>
         <input id="search" name="search" className="bg-white text-secondaryForground rounded-md px-2 ml-1" type="text" onChange={(e)=> setSearch(e.target.value)}/>
         <button type="submit">search</button>
       </form>
    </div>
  )
}

