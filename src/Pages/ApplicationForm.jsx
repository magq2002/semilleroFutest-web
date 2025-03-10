import React, { useState } from "react";

import AnimationWave from "../components/AnimationWave";

export default function ApplicationForm() {

    const [formData, setFormData] = useState({
        name: "",
        identification: "",
        email: "",
        phoneNumber: "",
        semester: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleForm = (event) => {
        event.preventDefault()
        const { name, identification, email, phoneNumber, semester } = formData

        const options = {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, identification, email, phoneNumber, semester
            })
         }

        const res = fetch('https://semillero-futest-default-rtdb.firebaseio.com/postulantData.json', options)
        if (res) {
            alert("Postulación enviada")
        } else {

            alert("Ha ocurrido un error")
        }

        console.log(formData)
    }
    return (
        <>
            <section className="relative block py-24 lg:pt-0 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4 z-10">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        ¿Te gustaría unirte al semillero FUTEST?
                                    </h4>

                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                        Como parte del semillero podrás:
                                    </p>
                                    <ul className="list-disc text-gray-600">
                                        <li>Ser parte de un grupo de amigos con ganas de aprender sobre pruebas de software.</li>
                                        <li>Recibir capacitación en pruebas de software.</li>
                                        <li>Realizar cursos sobre herramientas de automatización de pruebas de software.</li>
                                        <li>Probar -en entornos reales- aplicaciones desarrolladas por empresas que trabajan con nosotros.</li>
                                        <li>Participar en procesos de selección laboral por parte de las empresas que nos acompañan.</li>
                                        <li>Participar en eventos y encuentros de semileros de investigación.</li>
                                        <li>Hacer parte del equipo de desarrollo de nuestro propio software orientado a la gestión de pruebas.</li>
                                        <li>Expresar tus ideas, demostrar tus habilidades, "cacharriar" y mucho más...!</li>
                                    </ul>
                                    <hr class="my-6 border-gray-400" />
                                    <form method="POST" onSubmit={handleForm}>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="full-name">
                                                Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Nombre Completo"
                                                style={{ transition: "all .15s ease" }}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email">
                                                Identificación
                                            </label>
                                            <input
                                                type="text"
                                                name="identification"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Identificación"
                                                style={{ transition: "all .15s ease" }}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email">
                                                Correo Institucional
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Correo Institucional"
                                                style={{ transition: "all .15s ease" }}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="">
                                                Número de celular
                                            </label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Número de celular"
                                                style={{ transition: "all .15s ease" }}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="">
                                                Semestre
                                            </label>
                                            <input
                                                type="text"
                                                name="semester"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Semestre"
                                                style={{ transition: "all .15s ease" }}
                                                onChange={handleInputChange}
                                                required

                                            />
                                        </div>

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="submit"
                                                style={{ transition: "all .15s ease" }}>
                                                Enviar solicitud
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AnimationWave fill="#FF7E04" height="400" width="3000" />

            </section>
        </>
    )
}