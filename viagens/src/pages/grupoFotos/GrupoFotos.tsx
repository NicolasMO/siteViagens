import React, { Fragment, useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"


import Imagens from "../../components/Imagens"

import Image from "next/image"


export default function GrupoFotos () {

    const imagens : { morroInacio, grutaLapa, cachoeiraFumaca, cachoeiraRiachinho, cidadeLencois, cidadeCapao } = Imagens()

        const slide1 = [
            {
                url: imagens.cidadeCapao
            },
    
            {
                url: imagens.morroInacio
            },
            
            {
                url: imagens.grutaLapa
            }
        ]

        const slide2 = [
            {
                url: imagens.cachoeiraFumaca
            },
    
            {
                url: imagens.cachoeiraRiachinho
            },
            
            {
                url: imagens.cidadeLencois
            }
        ]
        const [currentIndex, setCurrentIndex] = useState(0)
        const [currentSlide, setCurrentSlide] = useState(slide1)

        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0
            const newIndex = isFirstSlide ? slide1.length -1 : currentIndex -1
            setCurrentIndex(newIndex)
        }

        

        const nextSlide = () => {
            const isLastSlide = currentIndex === slide1.length - 1
            const newIndex = isLastSlide ? 0 : currentIndex + 1
            setCurrentIndex(newIndex)
        }

        const outroSlide = () => {
            const slideAtual = currentSlide === slide1
            const nextSlide = slideAtual ? slide2 : slide1
            setCurrentSlide(nextSlide)
        }

    
        
    return (
        <Fragment>
        <div className='h-full w-full m-auto py-16 px-4 relative group'>
            <div className="w-full h-full rounded-2xl bg-center duration-500">
                <Image
                    src={currentSlide[currentIndex].url}
                    fill={true}
                    alt=""
                />
                {/* Left Arrow */}
            </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
        </div>

        <div>
        </div>
        </Fragment>
    )
}