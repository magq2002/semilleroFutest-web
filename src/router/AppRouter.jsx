import React from "react";
import { HashRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Landing from "../Pages/Landing";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/*" element={<Link className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600" to="/">VOLVER</Link>} />
            <Route path="/about_us" element={<h1>NOSOTROS <Link className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600" to="/">VOLVER</Link></h1>} />
            <Route path="/blog" element={<h1>BLOG <Link className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600" to="/">VOLVER</Link></h1>} />
            <Route path="/contact_us" element={<h1>CONTACTENOS <Link className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600" to="/">VOLVER</Link></h1>} />
            <Route path="/services" element={<h1>SERVICIOS <Link className="inline-block px-4 py-2 text-base font-bold text-center border-2 border-green-500 text-green-500 bg-transparent rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white active:border-green-600" to="/">VOLVER</Link></h1>} />
        </Routes>
    )
}
