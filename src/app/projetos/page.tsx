import React from "react";
import Image from "next/image";
import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"

export default function Projetos() {
    return(
        <main>
            <Navbar/>
            <h1 className="projects-title">Meus projetos pessoais ou que estou desenvolvendo</h1>

        </main>
    )
}