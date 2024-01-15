import { Fragment, useState } from "react";
import $ from "jquery"

import Imagens from "../../components/Imagens";
import Modal from "../../components/Modal";

import Local from "../agendamento/Local";

export default function Viagens() {

    const [openModal, setOpenModal] = useState(false)

    const imagens : {imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca, 
        imgCachoeiraRiachinho, imgCidadeCapao, imgCidadeLencois } = Imagens()

    function exibirNomeLocal() {
        const foto = $('div:hover.p-2').last()

        const nomeLocal = document.getElementById('nomeLocal')
        nomeLocal.innerHTML = foto[0].getAttribute('id')
    }

    return (
        <Fragment>
            <div className={`flex flex-col items-center pt-16`}>
                    <h1 className="text-2xl font-bold">Esses são nossos pontos turísticos</h1>
                    <h2 className="text-2xl font-bold text-[#1e7274]">Clique em um deles e veja mais informações</h2>
            </div>
            
            <div className={`flex flex-col items-center pt-16`}>
                    <p id="nomeLocal" className="text-2xl font-bold text-[#1e7274]">Aqui vai o nome do local</p>
            </div>

            <div className="flex justify-center my-16">
                <div id="fotos" className="grid grid-cols-3 w-2/4">

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cachoeira da Fumaça"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgCachoeiraFumaca}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cidade do Vale do Capão"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgCidadeCapao}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cidade de Lençóis"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgCidadeLencois}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Cachoeira do Riachinho"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgCachoeiraRiachinho}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Morro do Pai Inácio"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgMorroInacio}
                    </div>

                    <div className="p-2 opacity-80 hover:opacity-100 cursor-pointer" id="Gruta da Lapa"
                        onMouseEnter={() => exibirNomeLocal()}
                        onClick={() => {setOpenModal(true)}}
                        >
                        {imagens.imgGrutaLapa}
                    </div>

                </div>
            </div>

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <Local />
            </Modal>
        </Fragment>
    )
}