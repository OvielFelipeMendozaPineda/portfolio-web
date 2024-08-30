import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id='contact' className="bg-grey-900 border-t-2 border-white border-opacity-5 text-white py-14">
                <div className="container mx-auto px-4 py-10">

                    <div className="flex flex-wrap f border-b-2 gap-5 border-gray-900 justify-between mb-8">

                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h2 className="text-lg font-bold mb-4">Felipe Mendoza</h2>
                            <p className="text-gray-400">
                                Desarrollador Full Stack que ofrece soluciones digitales a problemas análogos.
                            </p>
                        </div>
                        <div  className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h2 className="text-lg font-bold mb-4">¡Contáctame!</h2>
                            <p className="text-gray-400">
                                Para conocer mas de mi trabajo y consultar mis servicios, puedes redactarme un correo a <b>felipemendozap.dev@gmail.com</b> y recuerda seguirme en mis <b>redes sociales.</b>
                            </p>
                            
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h2 className="text-lg font-bold mb-4">Social</h2>
                            <div className="flex space-x-4">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/felipe-mendozap"
                                    aria-label="Felipe Mendoza Linkedin Profile"
                                >
                                    <i className="bx bxl-linkedin bx-md text-white hover:text-blue-500"></i>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/OvielFelipeMendozaPineda"
                                    aria-label="Felipe Mendoza Github Profile"
                                >
                                    <i className="bx bxl-github bx-md text-white hover:text-gray-500"></i>
                                </a>
                                {/* <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.instagram.com/felipe_mendozap"
                                    aria-label="Felipe Mendoza Twitter Profile"
                                >
                                    <i className="bx bxl-instagram bx-md text-white hover:text-blue-400"></i>
                                </a> */}
                            </div>

                        </div>

                    </div>

                    <div className="text-center text-gray-500">
                        &copy; Copyright <script>document.write(new Date().getFullYear());</script>.
                        Made by <a className="text-white underline" rel="noreferrer" href="/">Felipe Mendoza</a>
                    </div>
                </div>
            </footer>

        </>
    )
}
