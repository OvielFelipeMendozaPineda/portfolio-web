import React from 'react';

function Card({ imagen, titulo, descripcion, enlace }) {
    return (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-h-[500px]">
            <div className="relative">
                <img
                    src={imagen}
                    alt={titulo} 
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="flex-1 p-4 flex flex-col items-center text-center">
                <h2 className="text-xl font-bold mb-2">{titulo}</h2>
                <p className="text-gray-700 mb-4">{descripcion}</p>
            </div>
            <div className="p-4">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <a href={enlace} target='_blank' rel='noopener noreferrer'>Visitar repositorio</a>
                </button>
            </div>
        </div>
    );
}

export default Card;
