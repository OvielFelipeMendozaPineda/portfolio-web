import React from 'react'

export default function HeroSection() {
    return (
        <>
            <section className="text-center py-16 mt-20 ">
                <div className=" mt-20 container mx-auto">
                    <div className="flex justify-center">
                        <div className='text-white'>
                            <h1 className="text-lg md:text-5xl lg:text-6xl font-bold mb-4">
                                Desarrollador, Músico & <p className='text-purple-600'>Entusiasta</p>
                            </h1>
                            <h2 className="text-xl md:text-2xl mb-6">
                                Transformo ideas y emociones en código y melodías, entrelazando mi pasión por la <b>programación</b> y la <b>música</b>.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
