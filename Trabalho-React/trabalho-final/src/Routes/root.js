import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/paginaHome/home.js";
import { Contato } from "../pages/contato/contato.js";
import { Carrinho } from "../pages/carrinho/carrinho.js";
import { Footer } from "../components/footer/footerPage.js";
import { Pag1 } from "../pages/registro/entrada.js";
import { Pag2 } from "../pages/login/log.js";

export function Rooter() {
   
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pag1 />} />
                <Route path="/login" element={<Pag2 />} />
                <Route path="/home" element={<Inicio />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}