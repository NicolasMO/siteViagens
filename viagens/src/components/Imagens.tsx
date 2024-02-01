import morroInacio from '../assets/imgs/morroPaiInacio/morroInacio.jpg'
import grutaLapa from '../assets/imgs/grutaLapa/grutaLapa.jpg'
import cachoeiraFumaca from '../assets/imgs/cachoeiraFumaca/cachoeiraFumaca.jpg'
import cachoeiraRiachinho from '../assets/imgs/cachoeiraRiachinho/riachinho.jpg'
import cidadeLencois from '../assets/imgs/lencois/lencois.jpg'
import cidadeCapao from '../assets/imgs/valeCapao/capao2.jpg'
import logoReact from '../assets/imgs/icons/react.png'
import logoGitHub from '../assets/imgs/icons/gitHub.png'
import logoLinkedin from '../assets/imgs/icons/linkedin.png'
import logoNextJS from '../assets/imgs/icons/nextjs.png'
import logoTailwind from '../assets/imgs/icons/tailwind.png'
import logoJQuery from '../assets/imgs/icons/jquery.png'


import Image from "next/image";

export default function Imagens() {

    const imgMorroInacio = <Image
                    src={morroInacio}
                    width={500}
                    height={500}
                    alt="Morro do Pai Inácio"
                />

    const imgGrutaLapa = <Image
                    src={grutaLapa}
                    width={500}
                    height={500}
                    alt="Gruta da Lapa"
                />

    const imgCachoeiraFumaca = <Image
                    src={cachoeiraFumaca}
                    width={500}
                    height={500}
                    alt="Cachoeira da Fumaça"
                />

    const imgCachoeiraRiachinho = <Image
                    src={cachoeiraRiachinho}
                    width={500}
                    height={500}
                    alt="Cachoeira do Riachinho"
                />

    const imgCidadeLencois = <Image
                    src={cidadeLencois}
                    width={500}
                    height={500}
                    alt="Cidade de Lençóis"
                />

    const imgCidadeCapao = <Image
                    src={cidadeCapao}
                    width={500}
                    height={500}
                    alt="Cidade do Vale do Capão"
                />

    const iconReact = <Image
                    src={logoReact}
                    width={100}
                    height={100}
                    alt="React"
                />
                
    const iconGitHub = <Image
                    src={logoGitHub}
                    width={100}
                    height={100}
                    alt="GitHub"
                />

    const iconLinkedin = <Image
                    src={logoLinkedin}
                    width={100}
                    height={100}
                    alt="LinkedIn"
                />

    const iconNextJS = <Image
                    src={logoNextJS}
                    width={100}
                    height={100}
                    alt="NextJS"
                />

    const iconTailwind = <Image
                    src={logoTailwind}
                    width={100}
                    height={100}
                    alt="Tailwind"
                />

    const iconJQuery = <Image
                    src={logoJQuery}
                    width={100}
                    height={100}
                    alt="JQuery"
                />

    return { imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca, imgCachoeiraRiachinho, imgCidadeCapao, imgCidadeLencois,
             morroInacio, grutaLapa, cachoeiraFumaca, cachoeiraRiachinho, cidadeLencois, cidadeCapao, 
             iconReact, iconGitHub, iconLinkedin, iconNextJS, iconTailwind, iconJQuery}
}