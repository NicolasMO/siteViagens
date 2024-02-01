import $ from "jquery"

export default function usePaginasNav() {
    // Inicio.tsx
    function mostrarTexto() {
        const divTexto = $('div:hover').last().prev()
        divTexto[0].classList.toggle('h-20')

        const buttonTexto = $('div:hover > button')
        if (buttonTexto[0].innerHTML == 'Expandir') {
            buttonTexto[0].innerHTML = 'Ocultar'
        } else {
            buttonTexto[0].innerHTML = 'Expandir'
        }
    }

    // Viagens.tsx
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

    return {
        mostrarTexto, exibirNomeLocal, coletaneaFotos, larguraMobile
    }
}