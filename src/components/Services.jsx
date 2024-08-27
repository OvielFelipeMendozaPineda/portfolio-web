import React from 'react'

function Services() {
    return (
        <>
            <section className=" py-16 px-6">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Mis Servicios</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-purple-400">
                        <div className="p-8">
                            <div className="flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 text-black"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x={2} y={2} width={20} height={20} rx="2.18" ry="2.18" />
                                    <line x1={7} y1={2} x2={7} y2={22} />
                                    <line x1={17} y1={2} x2={17} y2={22} />
                                    <line x1={2} y1={12} x2={22} y2={12} />
                                    <line x1={2} y1={7} x2={7} y2={7} />
                                    <line x1={2} y1={17} x2={7} y2={17} />
                                    <line x1={17} y1={7} x2={22} y2={7} />
                                    <line x1={17} y1={17} x2={22} y2={17} />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-center mb-4">Desarrollo Web</h3>
                            <p className="text-gray-800 text-lg text-center">
                                Construyo sitios web modernos y escalables utilizando las últimas tecnologías para ofrecer una experiencia de usuario impecable.
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl  hover:bg-purple-400">
                        <div className="p-8">
                            <div className="flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 text-black"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={12} y1={8} x2={12} y2={12} />
                                    <line x1={12} y1={16} x2={12} y2={16} />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-center mb-4">Diseño UX/UI</h3>
                            <p className="text-gray-800 text-lg text-center">
                                Ofrezco servicios de diseño centrado en el usuario para mejorar la experiencia y la interfaz de tus productos, garantizando una interacción intuitiva y efectiva.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Services
