import { useState } from "react";
import $ from "jquery"

import Imagens from "../../components/Imagens";
import Modal from "../../components/Modal";

import Local from "../agendamento/Local";

export default function Viagens() {

    const [openModal, setOpenModal] = useState(false)
    const [roloFotos, setRoloFotos] = useState(String)

    const imagens : {imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca, 
        imgCachoeiraRiachinho, imgCidadeCapao, imgCidadeLencois } = Imagens()

    function exibirNomeLocal() {
        const foto = $('div:hover.p-2').last()

        const nomeLocal = document.getElementById('nomeLocal')
        nomeLocal.innerHTML = foto[0].getAttribute('id')
    }

    function coletaneaFotos() {
        const foto = $('div:hover.p-2').last()

        const roloFotos = foto[0].getAttribute('coletanea-fotos')
        return roloFotos
    }

    function larguraMobile() {
        const larguraCorpo = document.querySelector('body').clientWidth
        if (larguraCorpo <= 635) {
            return true
        }
    }

    return (
        <div className="h-full">
            <div className={`flex flex-col items-center pt-16`}>
                    <h1 className="text-xl text-center xl:text-2xl font-bold">Esses são pontos turísticos da Chapada Diamantina</h1>
                    <h2 className="text-xl text-center xl:text-2xl font-bold text-[#1e7274]">Clique em um deles e veja mais informações</h2>
            </div>
            
            <div className={`flex flex-col items-center pt-16`}>
                    <p id="nomeLocal" className="hidden lg:block text-2xl font-bold h-10 text-[#1e7274]"></p>
            </div>

            <div className="flex justify-center my-16">
                <div id="fotos" className="grid sm:grid-cols-3 w-3z'/4">

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cachoeira da Fumaça" coletanea-fotos="fumaca"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgCachoeiraFumaca}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cidade do Vale do Capão" coletanea-fotos="valeCapao"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgCidadeCapao}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cidade de Lençóis" coletanea-fotos="lencois"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgCidadeLencois}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cachoeira do Riachinho" coletanea-fotos="riachinho"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgCachoeiraRiachinho}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Morro do Pai Inácio" coletanea-fotos="morroInacio"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgMorroInacio}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Gruta da Lapa" coletanea-fotos="grutaLapa"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)
                                        setRoloFotos(coletaneaFotos)}}
                        >
                        {imagens.imgGrutaLapa}
                    </div>

                </div>
            </div>

            <Modal isOpen={openModal} modalMobile={larguraMobile()} setModalOpen={() => setOpenModal(!openModal)}>
                <Local nomeLocal={roloFotos} mobile={larguraMobile()} />
            </Modal>
        </div>
    )
}