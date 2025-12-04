export default function TopBar() {
  return (
    <div className="bg-secondaryBackground text-primaryForground font-bold  min-w-screen h-20 flex justify-center items-center">
       <form>
         <label>search</label>
         <input className="bg-white text-secondaryForground rounded-md px-2 ml-1" type="text"/>
       </form>
    </div>
  )
}

