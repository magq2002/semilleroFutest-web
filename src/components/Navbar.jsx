import React from "react";
import LogoSVG from "../assets/svg/negativo_h_sf_web.svg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (

    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        (navbarOpen ? " relative mb-40" : "") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

          <img
            className="h-8 w-auto sm:h-10 mr-2"
            src={LogoSVG}
            alt="Logo"
          />

          {/* <p
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
          >Futest</p> */}
          <button
            className="cursor-pointer text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>

          </button>
        </div>
        <div
          className={
            "lg:flex mr-auto ml-auto items-center lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " py-16 bg-[#433455] flex justify-center items-center flex-col fixed w-screen h-/2 top-0 left-0 transition-transform duration-300 transform translate-y-0" : " hidden")
          }
          id="example-navbar-warning"
        >

          <button
            className="absolute top-0 right-10 cursor-pointer text-white text-xl lg:hidden leading-none px-3 py-4 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >


            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

          </button>

          <ul className="flex flex-col lg:flex-row list-none">
            <li className="flex items-center">
              <Link className={
                (props.transparent
                  ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                  : "text-gray-800 hover:text-gray-600") +
                " text-lg px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer"
              } to="/">HOME</Link>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row list-none">
            <li className={
              (navbarOpen ? " bg-blue-700 hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-slate-500 dark:focus:ring-blue-800" : "") +
              "flex items-center "}>
              <Link className={
                (props.transparent
                  ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                  : "text-gray-800 hover:text-gray-600") +
                " text-lg px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer"
              } to="/about_us">Nosotros</Link>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row list-none">
            <li className="flex items-center">
            <Link className={
                (props.transparent
                  ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                  : "text-gray-800 hover:text-gray-600") +
                " text-lg px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer"
              } to="services">servicios</Link>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row list-none">
            <li className="flex items-center">
              <Link className={
                (props.transparent
                  ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                  : "text-gray-800 hover:text-gray-600") +
                " text-lg px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer"
              } to="/blog">blog</Link>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row list-none">
            <li className="flex items-center">
              <Link className={
                (props.transparent
                  ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                  : "text-gray-800 hover:text-gray-600") +
                " text-lg px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer"
              } to="/contact_us">CONTACTENOS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
