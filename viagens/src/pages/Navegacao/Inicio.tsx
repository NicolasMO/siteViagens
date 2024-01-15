import { Fragment } from "react";
import Image from "next/image";

import Imagens from "../../components/Imagens";

export default function Inicio () {
    const {imgMorroInacio, imgGrutaLapa, imgCachoeiraFumaca} = Imagens()

    return (
        <Fragment>
            <div className={`flex flex-col items-center pt-16`}>
                <h1 className="text-2xl font-bold">Quer viajar e conhecer lugares bonitos?</h1>
                <h2 className="text-2xl font-bold text-[#1e7274]">Olha algumas das vistas!</h2>
            </div>

            <div className="flex justify-center mt-14">
                <div className="flex items-center w-2/4">
                    {imgMorroInacio}
                    
                    <div className="pl-5">
                        <h1 className="text-2xl font-bold text-[#1e7274]">Morro do Pai Inácio</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui. Duis ut diam quam nulla porttitor massa id neque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Auctor neque vitae tempus quam pellentesque nec. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Turpis nunc eget lorem dolor. Eget nulla facilisi etiam dignissim diam quis. Sit amet nisl purus in.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex items-center w-2/4">

                    <div className="pr-5 text-right">
                        <h1 className="text-2xl font-bold text-[#1e7274]">Gruta da Lapa</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui. Duis ut diam quam nulla porttitor massa id neque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Auctor neque vitae tempus quam pellentesque nec. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Turpis nunc eget lorem dolor. Eget nulla facilisi etiam dignissim diam quis. Sit amet nisl purus in.</p>
                    </div>

                    {imgGrutaLapa}

                </div>
            </div>

            <div className="flex justify-center my-20">
                <div className="flex items-center w-2/4">
                    
                    {imgCachoeiraFumaca}
                    <div className="pl-5 text-left">
                        <h1 className="text-2xl font-bold text-[#1e7274]">Cachoeira da Fumaça</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui. Duis ut diam quam nulla porttitor massa id neque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Auctor neque vitae tempus quam pellentesque nec. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Turpis nunc eget lorem dolor. Eget nulla facilisi etiam dignissim diam quis. Sit amet nisl purus in.</p>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}