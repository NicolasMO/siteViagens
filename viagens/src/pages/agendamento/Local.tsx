import GrupoFotos from "../grupoFotos/GrupoFotos";
import InfoLocais from '../../assets/texts/InfoLocais'

import Botao from "../../components/Botao";
import useCarroselFotos from "../../hooks/useCarroselFotos";

interface LocalProps {
  fotosLocal?: any
  nomeLocal?: any
  mobile?: boolean
}

export default function Local(props: LocalProps) {
  const infoLocais : { fumaca, riachinho, grutaLapa, lencois, morroInacio, valeCapao } = InfoLocais()
  const { visivel, mudarConteudoModal } = useCarroselFotos()

  function infosMobile() {
    return (<div className="flex flex-col items-center mt-10">
                {infoLocais[props.fotosLocal]}
            </div>)
  }

  function modalMobile(visivel) {
    switch(visivel) {
      case 'imagens': return <GrupoFotos roloFotos={props.fotosLocal}/>
      case 'texto': return infosMobile()
    }
  }

  
  if(props.mobile) {
    return (
    <div id="ModalMobile" className="flex flex-col h-full w-full">
      <div className='mt-10 h-5/6 w-full text-justify'>{modalMobile(visivel)}</div>
      <Botao onClick={mudarConteudoModal} className="mt-6 text-white bg-[#19747E] rounded-md">Ler sobre</Botao>
    </div>
    )
  } else {
    return (
      <div className= 'grid grid-cols-2 h-5/6 w-full'>
          <div className='mx-3 h-full w-full'><GrupoFotos roloFotos={props.fotosLocal}/></div>
          <div className='mx-5 text-justify'>{infoLocais[props.fotosLocal]}</div>
      </div>
    )
  }
  
}
