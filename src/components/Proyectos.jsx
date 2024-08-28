import React from 'react';
import Card from './ui/Card';

function Proyectos() {
    return (
        <section className='border-gray-100'>
            <div className='w-full h-0.5 bg-gray-50 opacity-5 mb-10'></div>
            <div>
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">Mis Proyectos</h2>
            </div>
            <div className='px-6 lg:px-60 py-16 flex justify-center flex-wrap gap-10'>
                <Card
                    titulo={"Gestor de activos"}
                    descripcion={"Plataforma que permite la gestión de activos, registrando por marca, ubicación y posibilidad de dar de baja"}
                    imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvGGOnk1AAxDQsPqSj5A5nxJaxT_Q_JhQ5A&s"}
                    enlace={"https://github.com/OscarSebastianRuedaRojas/proyectoInventarioCampus"}
                />
                <Card
                    titulo={"Menú administrador"}
                    descripcion={"Menu dashboard administrador con inicio de sesión y registro de cuenta autenticado que permite gestionar productos, pedidos y clientes"}
                    imagen={"https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8961388/og_image/optimized/0823-DashboardDesign-Dan-Social-e319a5a8a7ceb75b9e5010740700d409.png"}
                    enlace={"https://github.com/OvielFelipeMendozaPineda/eccomerce-front"}
                />
            </div>
        </section>
    );
}

export default Proyectos;
