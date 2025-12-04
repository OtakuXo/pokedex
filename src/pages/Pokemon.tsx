import { useParams } from "react-router"

export default function Pokemon() {
   const {id} = useParams();
   console.log(id)
  return (
    <div>
      this is pokemon page 
    </div>
  )
}

