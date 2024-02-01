import { Fragment, useState } from "react";
import Rodape from "./Rodape";
import Cabecalho from "./Cabecalho";

import Inicio from "../pages/Navegacao/Inicio";
import Viagens from "../pages/Navegacao/Viagens";
import Contatos from "../pages/Navegacao/Contatos";
import useComponents from "../hooks/useComponents";


export default function Corpo () {

    const { setInicio, setViagens, setContato, visivel } = useComponents()


    function switchNavegacao(visivel) {
        switch(visivel) {
            case 'inicio': return <Inicio />
            case 'viagens': return <Viagens />
            case 'contato': return <Contatos />
            case 'default': return <Inicio />
        }
    }

    return (
            <Fragment>
                <Cabecalho 
                    clickInicio={() => setInicio()}
                    clickViagens={() => setViagens()}
                    clickContatos={() => setContato()}
                    />

                <main className="h-full bg-[#E2E2E2]">
                    {switchNavegacao(visivel)}
                <Rodape />
                </main>          
            </Fragment>
    )
}