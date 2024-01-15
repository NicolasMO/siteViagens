import { Fragment } from "react";

import GrupoFotos from "../grupoFotos/GrupoFotos";

export default function Local() {
  return (
    <div className= 'grid grid-cols-2 grid-rows-2 h-4/6 w-full mt-12'>
        <div className='mx-3 h-full w-5/6'><GrupoFotos /></div>
        <div>Informações</div>
        <div>Calendario</div>
        <div>Horário</div>
    </div>
  )
}
