import { useState } from "react";

export default function useComponents() {
    // Cabecalho.tsx
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

        // Corpo.tsx
        const [visivel, setVisivel] = useState<'inicio' | 'viagens' | 'quemSomos' | 'contato'>('inicio')

        function setInicio() {
            setVisivel('inicio')
            const larguraCorpo = document.querySelector('body').clientWidth
            if (larguraCorpo <= 635) {
                const barraMenu1 = document.querySelector("#barra1")
                const barraMenu2 = document.querySelector("#barra2")
                const barraMenu3 = document.querySelector("#barra3")
                const menuToggle = document.querySelector("#menu")

                const parametroBarra1 = ['origin-center', 'rotate-45', 'translate-y-2', 'transition', 'duration-75']
                const parametroBarra2 = ['opacity-0', 'transition', 'duration-75']
                const parametroBarra3 = ['origin-center', '-rotate-45', '-translate-y-2', 'transition', 'duration-75']
            
                parametroBarra1.map(toggleBarra => barraMenu1.classList.toggle(toggleBarra))
                parametroBarra2.map(toggleBarra => barraMenu2.classList.toggle(toggleBarra))
                parametroBarra3.map(toggleBarra => barraMenu3.classList.toggle(toggleBarra))
                menuToggle.classList.toggle('hidden')
                
                const corpo = document.querySelector('body')
                corpo.classList.toggle('overflow-hidden')
            }
        }
        
        function setViagens() {
            setVisivel('viagens')
            const larguraCorpo = document.querySelector('body').clientWidth
            if (larguraCorpo <= 635) {
                const barraMenu1 = document.querySelector("#barra1")
                const barraMenu2 = document.querySelector("#barra2")
                const barraMenu3 = document.querySelector("#barra3")
                const menuToggle = document.querySelector("#menu")

                const parametroBarra1 = ['origin-center', 'rotate-45', 'translate-y-2', 'transition', 'duration-75']
                const parametroBarra2 = ['opacity-0', 'transition', 'duration-75']
                const parametroBarra3 = ['origin-center', '-rotate-45', '-translate-y-2', 'transition', 'duration-75']
            
                parametroBarra1.map(toggleBarra => barraMenu1.classList.toggle(toggleBarra))
                parametroBarra2.map(toggleBarra => barraMenu2.classList.toggle(toggleBarra))
                parametroBarra3.map(toggleBarra => barraMenu3.classList.toggle(toggleBarra))
                menuToggle.classList.toggle('hidden')

                const corpo = document.querySelector('body')
                corpo.classList.toggle('overflow-hidden')
            }
        }
        
        function setContato() {
            setVisivel('contato')
            const larguraCorpo = document.querySelector('body').clientWidth
            if (larguraCorpo <= 635) {
                const barraMenu1 = document.querySelector("#barra1")
                const barraMenu2 = document.querySelector("#barra2")
                const barraMenu3 = document.querySelector("#barra3")
                const menuToggle = document.querySelector("#menu")

                const parametroBarra1 = ['origin-center', 'rotate-45', 'translate-y-2', 'transition', 'duration-75']
                const parametroBarra2 = ['opacity-0', 'transition', 'duration-75']
                const parametroBarra3 = ['origin-center', '-rotate-45', '-translate-y-2', 'transition', 'duration-75']
            
                parametroBarra1.map(toggleBarra => barraMenu1.classList.toggle(toggleBarra))
                parametroBarra2.map(toggleBarra => barraMenu2.classList.toggle(toggleBarra))
                parametroBarra3.map(toggleBarra => barraMenu3.classList.toggle(toggleBarra))
                menuToggle.classList.toggle('hidden')

                const corpo = document.querySelector('body')
                corpo.classList.toggle('overflow-hidden')
            }
        }


        return {
            mostrarMenu, setInicio, setViagens, setContato, visivel
        }
}