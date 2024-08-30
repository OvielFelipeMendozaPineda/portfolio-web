import React, { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="w-full bg-gray-900 px-6 py-10 text-white">
                <div className="container mx-auto flex items-center text-white justify-between">
                    <div className="text-2xl font-bold">
                        <a href="/" className="hover:text-purple-400 text-purple-600">
                            Felipe Mendoza
                        </a>
                    </div>
                    <button
                        className="lg:hidden flex items-center"
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden lg:flex lg:items-center lg:space-x-6"
                        id="menu-links"
                    >
                        <ul className="flex space-x-6">

                            <li>
                                <a href="#services" className="hover:text-purple-400">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#proyects" className="hover:text-purple-400">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-purple-400">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <ul className="flex flex-col space-y-4 px-6 py-4 mt-5 items-center gap-5">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Perfil
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Metas
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Identidad
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Certificaciones
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
