import React, { Fragment, useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

import Coletanea from './Coletanea'

import Image from "next/image"

interface GrupoFotosProps {
    roloFotos? : any
}

export default function GrupoFotos (props: GrupoFotosProps) {

    const coletanea : { fumaca, riachinho, grutaLapa, lencois, morroInacio, valeCapao } = Coletanea()

        const [currentIndex, setCurrentIndex] = useState(0)

        const definirRolo = (fotosLocal) => {
            const roloFotos = fotosLocal
            return (roloFotos)
        }

        const roloFotos = definirRolo(props.roloFotos)

        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0
            const newIndex = isFirstSlide ? coletanea[roloFotos].length -1 : currentIndex -1
            setCurrentIndex(newIndex)
        }

        

        const nextSlide = () => {
            const isLastSlide = currentIndex === coletanea[roloFotos].length - 1
            const newIndex = isLastSlide ? 0 : currentIndex + 1
            setCurrentIndex(newIndex)
        }        
        
    return (
        <Fragment>
        <div className='h-full w-full m-auto py-16 px-4 relative group'>
            <div className="w-full h-full rounded-2xl bg-center duration-500">
                <Image
                    src={coletanea[roloFotos][currentIndex].url}
                    fill={true}
                    alt=""
                />
                {/* Left Arrow */}
            </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={20}/>
                    
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={20}/>
                </div>
        </div>

        <div>
        </div>
        </Fragment>
    )
}