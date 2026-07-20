import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Galeria() {
  const indice = [
    { label: "Imágenes", href: "#imagenes" },
    { label: "Videos", href: "#videos" },
  ];

  return (
    <ArchiveLayout indice={indice} boardName="galeria">

      <PostBlock numero="200" fecha="" tag="INFO">
        <h1 className="glitch">GALERÍA DEL ARCHIVO</h1>
        <p>
          Fragmentos visuales recuperados junto a los relatos: fotografías de
          lugares abandonados y grabaciones asociadas a casos documentados.
        </p>
      </PostBlock>

      <PostBlock id="imagenes" numero="201" fecha="" tag="4 ARCHIVOS">
        <h2>Imágenes recuperadas</h2>

        <div className="gallery-grid">

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?abandoned,house"
              alt="Casa abandonada asociada a un caso del archivo"
              loading="lazy"
            />
            <figcaption>#014 — Km 17</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?abandoned,hospital"
              alt="Hospital abandonado asociado a un caso del archivo"
              loading="lazy"
            />
            <figcaption>#022 — Ala este</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?dark,forest,fog"
              alt="Bosque con niebla asociado a un caso del archivo"
              loading="lazy"
            />
            <figcaption>#031 — Sendero</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?old,corridor,dark"
              alt="Pasillo antiguo asociado a un caso del archivo"
              loading="lazy"
            />
            <figcaption>#007 — La habitación</figcaption>
          </figure>

        </div>
      </PostBlock>

      <PostBlock id="videos" numero="202" fecha="" tag="1 ARCHIVO">
        <h2>Material audiovisual</h2>
        <p>
          Grabaciones relacionadas con investigaciones y expediciones del
          archivo.
        </p>

        <div className="video-wrapper">
          <iframe
            width="100%"
            height="270"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video de investigación del archivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </PostBlock>

      <PostBlock numero="203" fecha="">
        <p>
          ¿Tienes fotografías o grabaciones propias? Puedes adjuntarlas al{" "}
          <a href="/enviar">enviar tu historia</a>.
        </p>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default Galeria;