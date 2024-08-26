import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-14">
                <div className="container mx-auto px-4 py-10">

                    <div className="flex flex-wrap flex-row-reverse border-b-2 gap-5 border-gray-900 justify-between mb-8">

                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h2 className="text-lg font-bold mb-4">Social</h2>
                            <div className="flex space-x-4">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://linkedin.com/in/rammcodes"
                                    aria-label="Felipe Mendoza Linkedin Profile"
                                >
                                    <i className="bx bxl-linkedin bx-md text-white hover:text-blue-500"></i>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/rammcodes"
                                    aria-label="Felipe Mendoza Github Profile"
                                >
                                    <i className="bx bxl-github bx-md text-white hover:text-gray-500"></i>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com/rammcodes"
                                    aria-label="Felipe Mendoza Twitter Profile"
                                >
                                    <i className="bx bxl-twitter bx-md text-white hover:text-blue-400"></i>
                                </a>
                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h2 className="text-lg font-bold mb-4">Felipe Mendoza</h2>
                            <p className="text-gray-400">
                                Desarrollador Full Stack que ofrece soluciones digitales a problemas análogos.
                            </p>
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
