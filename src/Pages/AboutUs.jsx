import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AnimationWave from "../components/AnimationWave"

export default function AboutUs() {
    return (
    <>
    {/* Usamos el Navbar con transparent={false} para que tenga fondo oscuro */}
    <Navbar transparent/>
    <main>
        {/* Hero Section */}
        <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
                minHeight: "75vh",
            }}
        >
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                }}
            >
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black">
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </span>
                <AnimationWave fill="#00B694" height="400" width="3000" />
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <h1 className="text-white font-semibold text-5xl animate__animated animate__pulse">Sobre Nosotros</h1>
                    <p className="mt-4 text-lg text-gray-300">
                    Conoce más sobre nuestro equipo, misión y visión en el mundo de las pruebas de software.
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Misión y Visión */}
            <div className="container mx-auto px-4 py-16">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#00B694]">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">Nuestra Misión</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    En FUTEST, nos dedicamos a formar profesionales altamente capacitados en el área de pruebas de software,
                    brindando un espacio de aprendizaje colaborativo donde los estudiantes pueden desarrollar habilidades
                    prácticas y teóricas que les permitan destacarse en el mercado laboral.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    Trabajamos en estrecha colaboración con empresas del sector para ofrecer experiencias reales y
                    oportunidades de crecimiento profesional a nuestros miembros.
                </p>
                </div>

                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#FF7E04]">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">Nuestra Visión</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Aspiramos a ser reconocidos como el semillero líder en formación de profesionales en pruebas de
                    software, creando un impacto significativo en la calidad del desarrollo de software a nivel nacional e
                    internacional.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    Buscamos establecer un estándar de excelencia en la formación de testers, contribuyendo activamente a la
                    investigación y desarrollo de nuevas metodologías y herramientas para la industria.
                </p>
                </div>
            </div>
            </div>

            {/* Valores */}
            <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center text-center mb-12">
                <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nuestros Valores</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                    Los principios que guían nuestro trabajo y compromiso con la excelencia.
                </p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 px-4 text-center mb-8">
                <div className="bg-[#433455] rounded-lg p-6 h-full shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#433455]"
                    >
                        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                        <path d="M12 13v8"></path>
                        <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
                    </svg>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">Innovación</h5>
                    <p className="mt-2 mb-4 text-gray-300">
                    Fomentamos el pensamiento creativo y la búsqueda constante de nuevas soluciones y metodologías en el
                    campo de las pruebas de software.
                    </p>
                </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center mb-8">
                <div className="bg-[#00B694] rounded-lg p-6 h-full shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#00B694]"
                    >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">Colaboración</h5>
                    <p className="mt-2 mb-4 text-gray-300">
                    Creemos en el poder del trabajo en equipo y la sinergia que se crea cuando diferentes mentes trabajan
                    juntas hacia un objetivo común.
                    </p>
                </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center mb-8">
                <div className="bg-[#FF7E04] rounded-lg p-6 h-full shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#FF7E04]"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">Excelencia</h5>
                    <p className="mt-2 mb-4 text-gray-300">
                    Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos, desde la formación
                    académica hasta el desarrollo de proyectos reales.
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-8/12 px-4 mr-auto ml-auto text-center">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">¿Quieres ser parte de nuestro equipo?</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Únete a nuestro semillero y forma parte de una comunidad apasionada por las pruebas de software.
                    Aprende, crece y desarrolla tus habilidades con nosotros.
                </p>
                <div className="mt-8">
                    <Link
                    to="/contact_us"
                    className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600 mr-4"
                    >
                    Contáctanos
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </main>
        {/* Wave Animation at the bottom */}
        <div className="relative pt-[70px]">
        <AnimationWave fill="#FF7E04" height="300" width="3000" />
        </div>
        <Footer/>
        </>
    )
}
