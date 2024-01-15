import morroInacio from '../assets/imgs/morroPaiInacio/morroInacio.png'
import grutaLapa from '../assets/imgs/grutaLapa/grutaLapa.jpg'
import cachoeiraFumaca from '../assets/imgs/cachoeiraFumaca/cachoeiraFumaca.png'
import cachoeiraRiachinho from '../assets/imgs/cachoeiraRiachinho/riachinho.png'
import cidadeLencois from '../assets/imgs/lencois/lencois.jpg'
import cidadeCapao from '../assets/imgs/valeCapao/capao2.jpg'

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

    return { imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca, imgCachoeiraRiachinho, imgCidadeCapao, imgCidadeLencois,
             morroInacio, grutaLapa, cachoeiraFumaca, cachoeiraRiachinho, cidadeLencois, cidadeCapao}
}