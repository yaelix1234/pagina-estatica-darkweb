import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Testimonios() {
  const indice = [
    { label: "Experiencias", href: "#testimonios" },
  ];

  return (
    <ArchiveLayout indice={indice} boardName="testimonios">

      <PostBlock numero="300" fecha="" tag="INFO">
        <h1 className="glitch">TESTIMONIOS DEL ARCHIVO</h1>
        <p>
          Voces de quienes se atrevieron a compartir lo que vivieron.
          Los nombres han sido protegidos o sustituidos por seudónimos,
          tal como establece nuestra política de anonimato.
        </p>
      </PostBlock>

      <PostBlock id="testimonios" numero="301" fecha="" tag="ANÓNIMO">
        <h2>Experiencias compartidas</h2>

        <div className="testimonio-grid">

          <div className="testimonio-card">
            <p className="cita">
              "Envié mi historia sin esperar respuesta. Tres días después
              vi que ya estaba publicada, palabra por palabra, tal como
              la escribí."
            </p>
            <p className="autor">— Usuario anónimo, caso #014</p>
          </div>

          <div className="testimonio-card">
            <p className="cita">
              "Es el único lugar donde pude contar lo que pasó en esa
              casa sin que nadie me dijera que lo estaba inventando."
            </p>
            <p className="autor">— R.M., caso #022</p>
          </div>

          <div className="testimonio-card">
            <p className="cita">
              "El archivo clasificó mi relato en la categoría correcta
              incluso cuando yo mismo no sabía cómo describir lo que vi."
            </p>
            <p className="autor">— Usuario anónimo, caso #031</p>
          </div>

          <div className="testimonio-card">
            <p className="cita">
              "Llevaba años buscando un lugar serio para dejar esta
              grabación. Aquí no me pidieron pruebas, solo el relato."
            </p>
            <p className="autor">— D.L., caso #007</p>
          </div>

        </div>
      </PostBlock>

      <PostBlock numero="302" fecha="">
        <p>
          ¿Tienes tu propia experiencia? Puedes{" "}
          <a href="/enviar">enviarla ahora</a> o revisar los{" "}
          <a href="/historias">casos ya publicados</a>.
        </p>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default Testimonios;