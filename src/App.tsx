import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Historias from "./pages/Historias";
import Historia from "./pages/Historia";
import EnviarHistoria from "./pages/EnviarHistoria";
import Acerca from "./pages/Acerca";
import Mision from "./pages/Mision";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Testimonios from "./pages/Testimonios";
import Aliados from "./pages/Aliados";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import Terminos from "./pages/Terminos";


function App() {

  return (

    <BrowserRouter>

      <div className="site-container">

        <Navbar />

        <main className="content">

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/enviar" element={<EnviarHistoria />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/aliados" element={<Aliados />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="*" element={<Error404 />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;