import { Link } from "react-router-dom";
import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Historias() {

    const historias = [
        {
            id: "carretera-kilometro-17",
            numero: "017",
            titulo: "La carretera del kilómetro 17",
            autor: "Anonymous_17",
            fecha: "2008-06-12",
            descripcion:
                "Un conductor relata que en una carretera abandonada aparece una figura desconocida cada madrugada."
        },
        {
            id: "habitacion-nadie-usa",
            numero: "007",
            titulo: "La habitación que nadie usa",
            autor: "Archivo_Desconocido",
            fecha: "2011-11-03",
            descripcion:
                "Una antigua casa conserva una habitación cerrada durante años donde ocurren sucesos inexplicables."
        }
    ];

    const indice = historias.map((h) => ({
        label: h.titulo,
        href: `#${h.id}`,
    }));

    return (
        <ArchiveLayout indice={indice} boardName="historias">

            <PostBlock numero="000" fecha="" tag="CATÁLOGO">
                <h1 className="glitch">ARCHIVO DE HISTORIAS</h1>
                <p>
                    Explora relatos recopilados de fenómenos extraños,
                    leyendas urbanas y experiencias paranormales.
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

                    <p>{historia.descripcion}</p>

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