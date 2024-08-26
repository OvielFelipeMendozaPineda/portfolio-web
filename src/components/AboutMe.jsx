import React from 'react'

export default function AboutMe() {
  return (
    <>
      <section id='about-me' className='w-full text-white bg-purple-600 py-28 flex justify-center px-6 md:px-12 mt-10 lg:px-20'>
        <div className='flex flex-col gap-10 items-center justify-center max-w-3xl'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-center'>¡Hola! Soy Felipe Mendoza, bienvenidos.</h2>
          <p className='text-center text-base md:text-lg lg:text-xl font-medium'>
            Desde que comencé mi camino en la programación y la música, he trabajado en proyectos que combinan creatividad y lógica, siempre colaborando con personas talentosas para construir soluciones digitales. Me considero un apasionado constante, curioso por naturaleza, y siempre enfocado en perfeccionar mis habilidades. Cada día es una nueva oportunidad para aprender, crecer y crear algo que inspire a los demás.
          </p>
        </div>
      </section>

    </>
  )
}
