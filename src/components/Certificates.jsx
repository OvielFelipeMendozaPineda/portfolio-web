import React from 'react'

function Certificates() {
    return (
        <>
            <div className='h-1 bg-white opacity-5'></div>
            <section className=" py-16 px-6">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Mi Formación</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-wrap justify-center">
                        <div class="px-10 py-10">
                            <div class="flex">
                                <div class="relative flex flex-col justify-center  pl-16">
                                    <div class="absolute left-0 top-15 z-40 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full  bg-white">
                                        <img src="src\assets\campus-icono.png" alt="Campuslands" class="h-11 w-11" />
                                    </div>
                                    <p class="text-lg uppercase text-neutral-500 dark:text-neutral-400 tracking-widest">
                                        Noviembre 2023 - AGOSTO 2024
                                    </p>
                                    <h3 class="my-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                        Desarrollo Web Full Stack
                                    </h3>
                                    <p class="mb-1 text-lg font-medium text-neutral-700 dark:text-neutral-300">
                                        CampusLands
                                    </p>
                                </div>
                            </div>
                        </div>                 
                    </div>

                </div>
            </section>



        </>
    )
}

export default Certificates
