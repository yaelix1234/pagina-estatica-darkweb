import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                THE ABYSS ARCHIVE
            </div>

            <div className="nav-links">

                <Link to="/">Inicio</Link>
                <Link to="/historias">Historias</Link>
                <Link to="/enviar">Enviar historia</Link>
                <Link to="/mision">Misión</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/galeria">Galería</Link>
                <Link to="/testimonios">Testimonios</Link>
                <Link to="/aliados">Aliados</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/aviso-privacidad">Aviso de Privacidad</Link>
                <Link to="/terminos">Términos</Link>

            </div>

        </nav>
    );
}

export default Navbar;