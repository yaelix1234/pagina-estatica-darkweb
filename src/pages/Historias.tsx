import { Link } from "react-router-dom";
import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";
import { historias } from "../data/historias";

function Historias() {

    const indice = historias.map((h) => ({
        label: h.titulo,
        href: `#${h.id}`,
    }));

    return (
        <ArchiveLayout indice={indice} boardName="historias">

            <PostBlock numero="000" fecha="" tag="CATÁLOGO">
                <h1 className="glitch">ARCHIVO DE HISTORIAS</h1>
                <p>
                    Explora relatos recopilados de fenómenos extraños, leyendas
                    urbanas y experiencias paranormales enviadas por la comunidad.
                    Actualmente el archivo conserva {historias.length} casos documentados.
                </p>
            </PostBlock>

            {historias.map((historia) => (
                <PostBlock
                    key={historia.id}
                    id={historia.id}
                    numero={historia.numero}
                    fecha={historia.fecha}
                    tag={historia.autor}
                >
                    <h2>{historia.titulo}</h2>

                    <p>{historia.resumen}</p>

                    <p>
                        <Link to={`/historia?id=${historia.id}`}>
                            <button className="archive-button">
                                Leer historia completa
                            </button>
                        </Link>
                    </p>
                </PostBlock>
            ))}

        </ArchiveLayout>
    );
}

export default Historias;