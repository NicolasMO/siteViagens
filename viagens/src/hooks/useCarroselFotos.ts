import { useState } from "react"

export default function useCarroselFotos() {
    // Local.tsx
    const [visivel, setVisivel] = useState<'imagens'| 'texto'>('imagens')

    function mudarConteudoModal(){
        if(visivel=='imagens') {
        setVisivel('texto')
        document.querySelector("#ModalMobile button").innerHTML = 'Ver imagens'
        } else {
        setVisivel('imagens')
        document.querySelector("#ModalMobile button").innerHTML = 'Ler sobre'
        }
    }

    return {
        visivel, mudarConteudoModal
    }
}