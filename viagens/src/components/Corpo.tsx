import { Fragment, useState } from "react";
import Rodape from "./Rodape";
import Cabecalho from "./Cabecalho";

import Inicio from "../pages/Navegacao/Inicio";
import Viagens from "../pages/Navegacao/Viagens";
import QuemSomos from "../pages/Navegacao/QuemSomos";
import Contatos from "../pages/Navegacao/Contatos";


export default function Corpo () {

    const [visivel, setVisivel] = useState<'inicio' | 'viagens' | 'quemSomos' | 'contato'>('inicio')

    function setInicio() {
        setVisivel('inicio')
    }
    
    function setViagens() {
        setVisivel('viagens')
    }
    function setQuemSomos() {
        setVisivel('quemSomos')
    }
    function setContato() {
        setVisivel('contato')
    }

    function switchNavegacao(visivel) {
        switch(visivel) {
            case 'inicio': return <Inicio />
            case 'viagens': return <Viagens />
            case 'quemSomos': return <QuemSomos />
            case 'contato': return <Contatos />
            case 'default': return <Inicio />
        }
    }

    return (
            <Fragment>
                <Cabecalho 
                    clickInicio={() => setInicio()}
                    clickViagens={() => setViagens()}
                    clickQuemSomos={() => setQuemSomos()}
                    clickContatos={() => setContato()}
                    />

                <main className="h-full bg-[#E2E2E2]">
                    {switchNavegacao(visivel)}
                    <Rodape />
                </main>          
            </Fragment>
    )
}