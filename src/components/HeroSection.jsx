import React from 'react'

export default function HeroSection() {
    return (
        <>
            <section className="text-center px-6 pt-40 lg:pt-60 bg-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="text-white">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
                                Desarrollador, Músico & <span className="text-purple-600 font-bold">Entusiasta</span>
                            </h2>
                            <h3 className="text-sm md:text-md lg:text-xl mb-6">
                                Transformo ideas y emociones en código y melodías, entrelazando mi pasión por la <span className="font-bold">programación</span> y la <span className="font-bold">música</span>.
                            </h3>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="#about-me"
                                    className="sm:px-3  px-6 py-3 border-2 rounded-lg border-purple-600 text-purple-600 text-base sm:text-lg md:text-xl font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
                                >
                                    Sobre mí
                                </a>
                            </div>
                            <div className='w-full hidden lg:flex justify-center mt-40 mx:auto'>
                                <div className='w-7/12'>
                                    <img className='w-full' src="https://mattfarley.ca/img/hero-devices.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
