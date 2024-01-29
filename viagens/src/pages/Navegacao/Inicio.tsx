import { Fragment } from "react";

import Imagens from "../../components/Imagens";
import InfoLocais from '../../assets/texts/InfoLocais'
import Botao from "../../components/Botao";

import $ from "jquery"

export default function Inicio () {
    const {imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca} = Imagens()
    const infoLocais : { fumaca, grutaLapa, morroInacio } = InfoLocais()

    function mostrarTexto() {
        const divTexto = $('div:hover').last().prev()
        divTexto[0].classList.toggle('h-20')

        const buttonTexto = $('div:hover > button')
        if (buttonTexto[0].innerHTML == 'Expandir') {
            buttonTexto[0].innerHTML = 'Ocultar'
        } else {
            buttonTexto[0].innerHTML = 'Expandir'
        }
    }

    return (
        <Fragment>
            <div className={`h-full flex flex-col items-center pt-16`}>
                <h1 className="text-pretty text-xl xl:text-2xl font-bold">Quer viajar e conhecer lugares bonitos?</h1>
                <h2 className="text-xl xl:text-2xl font-bold text-[#1e7274]">Olha algumas das vistas!</h2>
            </div>

            <div className="flex items-center justify-center w-full mt-14">
                <div className="flex flex-col items-center xl:flex-row xl:items-center w-2/4">
                    <div className="xl:grow xl:shrink">{imgMorroInacio}</div>
                    
                    <div className="flex flex-col items-center overflow-hidden h-20 xl:h-full pt-1 xl:pl-5 xl:text-justify xl:w-2/4 xl:grow-0 xl:shrink-0">
                        <h1 className="text-xl font-bold xl:text-2xl text-[#1e7274]">Morro do Pai Inácio</h1>
                        <p className="text-center xl:text-justify">{infoLocais.morroInacio}</p>
                    </div>
                    <div className="mt-2 text-white bg-[#19747E] rounded-md xl:hidden">
                        <Botao id="botao" onClick={mostrarTexto}>Expandir</Botao>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex flex-col items-center xl:flex-row-reverse w-2/4">

                    <div className="xl:grow xl:shrink">{imgGrutaLapa}</div>
                    
                    <div className="pt-1 xl:pr-5 text-center overflow-hidden h-20 xl:h-full xl:text-justify xl:w-2/4 xl:grow-0 xl:shrink-0">
                        <h1 className="text-xl font-bold xl:text-right xl:text-2xl text-[#1e7274]">Gruta da Lapa</h1>
                        <p className="text-center xl:text-justify">{infoLocais.grutaLapa}</p>
                    </div>

                    <div className="mt-2 text-white bg-[#19747E] rounded-md xl:hidden">
                        <Botao id="botao" onClick={mostrarTexto}>Expandir</Botao>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-20">
                <div className="flex flex-col items-center xl:flex-row xl:items-center w-2/4">
                    
                <div className="xl:grow xl:shrink">{imgCachoeiraFumaca}</div>
                
                    <div className="flex flex-col items-center overflow-hidden h-20 xl:h-full pt-1 xl:pl-5 xl:text-justify xl:w-2/4 xl:grow-0 xl:shrink-0">
                        <h1 className="text-xl font-bold xl:text-2xl text-[#1e7274]">Cachoeira da Fumaça</h1>
                        <p className="text-center xl:text-justify">{infoLocais.fumaca}</p>
                    </div>
                    <div className="mt-2 text-white bg-[#19747E] rounded-md xl:hidden">
                        <Botao id="botao" onClick={mostrarTexto}>Expandir</Botao>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}