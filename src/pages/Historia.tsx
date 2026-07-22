import { useSearchParams, Link } from "react-router-dom";
import PostBlock from "../components/PostBlock";
import { historias } from "../data/historias";

function Historia() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const historia = historias.find((h) => h.id === id);

  if (!historia) {
    return (
      <div className="archive-simple">
        <PostBlock numero="404" fecha="" tag="NO ENCONTRADO">
          <h1 className="glitch">HISTORIA NO ENCONTRADA</h1>
          <p>
            El expediente solicitado no existe o fue removido del archivo.
          </p>
          <p>
            <Link to="/historias">
              <button className="archive-button">Volver al catálogo</button>
            </Link>
          </p>
        </PostBlock>
      </div>
    );
  }

  return (
    <div className="archive-simple">

      <PostBlock
        numero={historia.numero}
        fecha={historia.fecha}
        tag={historia.categoria}
      >
        <h1 className="glitch">{historia.titulo}</h1>
        <p className="post-quote">Reportado por: {historia.autor}</p>

        <img
          src={historia.imagen}
          alt={historia.titulo}
          style={{ width: "100%", maxHeight: "320px", objectFit: "cover" }}
        />

        {historia.contenido.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}

        <p>
          <Link to="/historias">
            <button className="archive-button">Volver al catálogo</button>
          </Link>
        </p>
      </PostBlock>

    </div>
  );
}

export default Historia;