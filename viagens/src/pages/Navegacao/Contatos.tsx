import Imagens from "../../components/Imagens"
const {iconReact, iconGitHub, iconLinkedin, iconNextJS, iconTailwind, iconJQuery} = Imagens()

export default function Contatos() {
    return (
        <div className="h-full xl:h-screen w-full px-4 flex items-center xl:items-start py-16">
            <div className="flex lg:h-3/5 flex-col xl:flex-row">
                
                <div className="h-full py-4 mb-6 lg:w-1/3 flex flex-col items-center border border-emerald-700 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold xl:text-2xl text-[#1e7274]">Sobre o Projeto</h1>
                    <p className="flex flex-col justify-center h-full text-center px-16 xl:w-5/6 pt-4 mb-3">
                        Criado para medir meus conhecimentos em desenvolvimento Front-end, possuindo visualização para PC e Mobile.
                        O site é um informativo de pontos turísticos da Chapada Diamantina, onde visitei vários lugares bonitos.
                        Algumas das fotos foram tiradas por mim e outras retiradas da internet.
                        Todas as descrições sobre os lugares foram retiradas do site <a href="https://guia.melhoresdestinos.com.br" className="text-blue-600">guia.melhoresdestinos.com.br</a>
                    </p>
                </div>

                <div className="h-full w-full py-4 lg:mx-4 mb-6 lg:w-1/3 flex flex-col items-center border border-emerald-700 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold xl:text-2xl text-[#1e7274]">Tecnologias usadas</h1>
                    <p className="text-center px-16 grid grid-cols-2 gap-4 justify-items-center xl:w-5/6 pt-4 mb-3">
                    <i className="">{iconReact}React</i>
                    <i className="">{iconNextJS}NextJS</i>
                        <i className="">{iconTailwind}Tailwind CSS</i>
                    <i className="">{iconJQuery}JQuery</i>
                    </p>
                </div>

                <div className="h-full w-full py-4 mb-2 lg:w-1/3 flex flex-col items-center border border-emerald-700 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold xl:text-2xl text-[#1e7274]">Sobre mim</h1>
                    <p className="text-center px-16 grid gap-4 xl:gap-0 justify-items-center xl:w-5/6 pt-4 mb-3">
                    <a href="https://github.com/NicolasMO"><i className="">{iconGitHub}GitHub</i></a>
                    <a href="https://www.linkedin.com/in/nícolas-martins-5a54a3174/"><i className="">{iconLinkedin}Linkedin</i></a>
                    </p>
                </div>

            </div>
        </div>
    )
}