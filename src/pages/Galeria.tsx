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

        <div className="gallery-grid grid sm:grid-cols-2 md:grid-cols-4 gap-3">

          <figure>
            <img
              src="https://imgs.search.brave.com/OWMyDGAaiSyLyFnc8S9oyP2jIRFyHI9j--VRyXov8oU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Np/c2RldGVycm9yLndv/cmRwcmVzcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDcvdmhzLXBlbGlj/dWxhcy10ZXJyb3It/cGVydHVyYmFkb3Jh/cy5qcGc_dz00MzA"
              alt="Carretera abandonada con niebla nocturna"
              loading="lazy"
            />
            <figcaption>#017 — Km 17</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/cF56P1MM50sKLB0r9-jjzzwQDfvqg_X5MG089Xva6uM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M3LzMw/LzBhL2M3MzAwYWI2/NDc1ODg1NzFmYjA1/MDAwMjNjNjliNTVk/LmpwZw"
              alt="Habitación cerrada en casa antigua"
              loading="lazy"
            />
            <figcaption>#007 — La habitación</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/_UtMyrhRoAgS-fDct7wFxPDSB5zJKu8aNKkDXl6tKgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IwL2I1/L2IyL2IwYjViMjAw/YWY1MzFmZWJkNjFk/ZTJiODA5YzEzYmRk/LmpwZw"
              alt="Pasillo de hospital abandonado"
              loading="lazy"
            />
            <figcaption>#022 — Ala este</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/zqWaB5hIUHO_rrNbyFbOxl26p01euUms5aJC_G9701U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYWxv/bWF5bmFjaG8uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA0L3ZpbGxhbm9z/LXRlcnJvci1zaWds/by1YWEktUmFwdG9y/LmpwZw"
              alt="Radio antigua de los años 60"
              loading="lazy"
            />
            <figcaption>#045 — La radio</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/ge2kHemEMEW7OUD1Yt8eDokhObUj4WBEL0OSzAzwKME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjL2Ey/L2NiL2RjYTJjYjAx/YjhkMjk0NjQ2MWEz/MzYxN2Y1MGQzMTRi/LmpwZw"
              alt="Ayuwoki"
              loading="lazy"
            />
            <figcaption>#031 — Sendero</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/zerVk1QVzFb41BN-RL8nYzbRoTEr656h06eQoyzzOqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2My/L2Y2L2ZkYzJmNjhi/OGVhZWM5MDExMDNm/MzE3YjA0MDU3MjQ3/LmpwZw"
              alt="Jeff the nigger"
              loading="lazy"
            />
            <figcaption>#058 — La llamada</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/m191AwFchdxE_DCN5ZnAzWproBC68UgLwdVAVsldM4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/My5leHBhbnNpb24u/bXgvZGltczQvZGVm/YXVsdC8wZmYwY2Q1/LzIxNDc0ODM2NDcv/c3RyaXAvdHJ1ZS9j/cm9wLzEwNzh4NjA3/KzArMC9yZXNpemUv/NjAweDMzOCEvZm9y/bWF0L3dlYnAvcXVh/bGl0eS82MC8_dXJs/PWh0dHBzOi8vY2Ru/LTMuZXhwYW5zaW9u/Lm14LzM2LzFmL2M1/YjNiMjE5NGE4NDhh/NTJlNTViZTExZDAz/NGYvY2FwdHVyYS1k/ZS1wYW50YWxsYS0y/MDE5LTEwLTMxLWEt/bGFzLTkuMTQuMTEu/cG5n"
              alt="Fotografía familiar antigua"
              loading="lazy"
            />
            <figcaption>#063 — La fotografía</figcaption>
          </figure>

          <figure>
            <img
              src="https://imgs.search.brave.com/Nlp4JdxV_8ZEAtl-cuK7iOmTEJ63QGtNUlYiWk2Qu14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkyLzlj/L2UxLzkyOWNlMTdh/ODZjOGUxMDNkZDI3/MzRkNzE1ZTBiMjYx/LmpwZw"
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
            src="https://youtu.be/H4dGpz6cnHo?si=UOAgQo4Hd8RW96Q9"
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