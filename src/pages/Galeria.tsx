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

      <PostBlock id="imagenes" numero="201" fecha="" tag="8 ARCHIVOS">
        <h2>Imágenes recuperadas</h2>

        <div className="gallery-grid">

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?abandoned,road,fog,night"
              alt="Carretera abandonada con niebla nocturna"
              loading="lazy"
            />
            <figcaption>#017 — Km 17</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?abandoned,house,dark,room"
              alt="Habitación cerrada en casa antigua"
              loading="lazy"
            />
            <figcaption>#007 — La habitación</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?abandoned,hospital,asylum,corridor"
              alt="Pasillo de hospital abandonado"
              loading="lazy"
            />
            <figcaption>#022 — Ala este</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?vintage,radio,old"
              alt="Radio antigua de los años 60"
              loading="lazy"
            />
            <figcaption>#045 — La radio</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?dark,forest,trail,fog"
              alt="Sendero en bosque con niebla"
              loading="lazy"
            />
            <figcaption>#031 — Sendero</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?old,telephone,vintage"
              alt="Teléfono antiguo"
              loading="lazy"
            />
            <figcaption>#058 — La llamada</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?old,photograph,vintage,family"
              alt="Fotografía familiar antigua"
              loading="lazy"
            />
            <figcaption>#063 — La fotografía</figcaption>
          </figure>

          <figure>
            <img
              src="https://source.unsplash.com/400x300/?basement,dark,abandoned"
              alt="Sótano oscuro de casa abandonada"
              loading="lazy"
            />
            <figcaption>#071 — El sótano</figcaption>
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