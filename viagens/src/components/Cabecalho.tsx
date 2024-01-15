import Botao from "./Botao";

interface CabecalhoProps {
    clickInicio: () => void
    clickViagens: () => void
    clickQuemSomos: () => void
    clickContatos: () => void
}

export default function Cabecalho (props: CabecalhoProps) {
    return (
        <div className={`flex justify-center bg-[#19747E]`}>
            <header className={`flex flex-row justify-evenly
                                w-4/12 text-xl`}>
                                    
                <Botao className="text-white" onClick={props.clickInicio}>Início</Botao>
                <Botao className="text-white" onClick={props.clickViagens}>Viagens</Botao>
                <Botao className="text-white" onClick={props.clickQuemSomos}>Quem somos</Botao>
                <Botao className="text-white" onClick={props.clickContatos}>Contato</Botao>
                
            </header>
        </div>
    )
}