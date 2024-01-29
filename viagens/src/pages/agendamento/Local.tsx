import GrupoFotos from "../grupoFotos/GrupoFotos";
import InfoLocais from '../../assets/texts/InfoLocais'
import { useState } from "react";

import Botao from "../../components/Botao";
import Modal from "../../components/Modal";

interface LocalProps {
  nomeLocal? : any
  mobile?: boolean
}

export default function Local(props: LocalProps) {
  const infoLocais : { fumaca, riachinho, grutaLapa, lencois, morroInacio, valeCapao } = InfoLocais()
  const [visivel, setVisivel] = useState<'imagens'| 'texto'>('imagens')

  function mostrarImagens(){
    return (<GrupoFotos roloFotos={props.nomeLocal}/>)
  }

  function mostrarInfos(){
    return (infoLocais[props.nomeLocal])
  }

  function setarVisivel(){
    if(visivel=='imagens') {
      setVisivel('texto')
      document.querySelector("#ModalMobile button").innerHTML = 'Ver imagens'
    } else {
      setVisivel('imagens')
      document.querySelector("#ModalMobile button").innerHTML = 'Ler sobre'
    }
  }

  function testando(visivel) {
    switch(visivel) {
      case 'imagens': return <GrupoFotos roloFotos={props.nomeLocal}/>
      case 'texto': return infoLocais[props.nomeLocal]
    }
  }

  
  if(props.mobile) {
    return (
    <div id="ModalMobile" className="flex flex-col h-full w-full">
      <div className='mt-10 h-5/6 w-full text-justify'>{testando(visivel)}</div>
      <Botao onClick={setarVisivel} className="mt-6 text-white bg-[#19747E] rounded-md">Ler sobre</Botao>
    </div>
    )
  } else {
    return (
      <div className= 'grid grid-cols-2 h-5/6 w-full'>
          <div className='mx-3 h-full w-full'><GrupoFotos roloFotos={props.nomeLocal}/></div>
          <div className='mx-5 text-justify'>{infoLocais[props.nomeLocal]}</div>
      </div>
    )
  }
  
}
