import Botao from "./Botao";

interface CabecalhoProps {
    clickInicio: () => void
    clickViagens: () => void
    clickContatos: () => void
}

export default function Cabecalho (props: CabecalhoProps) {
    function mostrarMenu() {
    
    const barraMenu1 = document.querySelector("#barra1")
    const barraMenu2 = document.querySelector("#barra2")
    const barraMenu3 = document.querySelector("#barra3")
    const menuToggle = document.querySelector("#menu")
    
    const corpo = document.querySelector('body')
    corpo.classList.toggle('overflow-hidden')

        const parametroBarra1 = ['origin-center', 'rotate-45', 'translate-y-2', 'transition', 'duration-75']
        const parametroBarra2 = ['opacity-0', 'transition', 'duration-75']
        const parametroBarra3 = ['origin-center', '-rotate-45', '-translate-y-2', 'transition', 'duration-75']
        
        parametroBarra1.map(toggleBarra => barraMenu1.classList.toggle(toggleBarra))
        parametroBarra2.map(toggleBarra => barraMenu2.classList.toggle(toggleBarra))
        parametroBarra3.map(toggleBarra => barraMenu3.classList.toggle(toggleBarra))
        

    menuToggle.classList.toggle('hidden')
    }

    return (
        <header className={`bg-[#19747E]`}>
            <div className="sm:hidden flex flex-col items-end w-full h-11 sm:h-8 justify-center">
                <div onClick={mostrarMenu} id='barra1' className="z-10 bg-white h-1 w-10 mt-1 my-1 mr-6 ">{/*origin-center rotate-45 translate-y-3*/}</div>
                <div id='barra2' className="bg-white h-1 w-10 mr-6 ">{/*hidden*/}</div>
                <div onClick={mostrarMenu} id='barra3' className="bg-white h-1 w-10 mt-1 mr-6">{/* origin-center -rotate-45*/}</div>
            </div>
            <nav id='menu' className={`h-screen hidden flex sm:h-11 z-10 text-3xl sm:flex flex-col justify-center sm:flex-row
                                sm:w-full sm:text-xl`}>
                            
                <Botao className="text-white mb-6 sm:my-0 mx-14" onClick={props.clickInicio}>Início</Botao>
                <Botao className="text-white my-6 sm:my-0 mx-14" onClick={props.clickViagens}>Locais</Botao>
                <Botao className="text-white my-6 sm:my-0 mx-14" onClick={props.clickContatos}>Contato</Botao>
                
            </nav>
        </header>
    )
}