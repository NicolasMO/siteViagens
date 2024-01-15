import {Fragment} from "react"
import Corpo from "../components/Corpo"
import GrupoFotos from "./grupoFotos/GrupoFotos"

export default function Home() {
  return (
    <Fragment>  
      <GrupoFotos/>
      <Corpo />
    </Fragment>
  )
}
