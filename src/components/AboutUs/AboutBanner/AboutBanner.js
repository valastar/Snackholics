import React from 'react'

function AboutBanner() {
    return (
        <>
            {/* { Hero Banner Section } */}
            <div className="relative bg-cover bg-center bg-no-repeat h-[550px] flex items-center justify-center text-center" 
                 style={{ backgroundImage: "url('/images/aboutUs/about.svg')" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Servicios</h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Estos son los servicios que garantizamos para nuestros clientes
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="py-20 lg:py-28">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-7/12 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Informacion de <span className="text-yellow-500">Salas</span></h2>
                                <div className="space-y-4">
                                    <p className="text-gray-300">
                                    Nuestras 2 salas que tienen equipo tecnologico con un buen precio de 120 la hora, es para que cualquier estudiante pueda hacer sus estudios en un lugar seguro y si necesita cualquier equipamiento lo garantizamos en nuestra papeleria y snacks
                                    </p>
                                    {/* <p className="text-gray-300">
                                        We have quickly grown into a sophisticated organization, serving a diverse clientele ranging from dynamic startups to established enterprises. We expanded our expertise beyond blockchain to encompass a wide spectrum of cutting edge technologies. Our portfolio of successful projects showcases our commitment to excellence and our ability to adapt, innovate, and deliver results.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="md:w-5/12" data-aos="fade-left" data-aos-duration="1000">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img src="/images/aboutUs/story.svg" alt="Our Story" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner