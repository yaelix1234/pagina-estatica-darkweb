import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Mision() {
  const indice = [
    { label: "Misión", href: "#mision" },
    { label: "Visión", href: "#vision" },
    { label: "Valores", href: "#valores" },
  ];

  return (
    <ArchiveLayout indice={indice} boardName="doc">

      <PostBlock numero="001" fecha="2020-01-01" tag="FUNDACIONAL">
        <h1 className="glitch">MISIÓN Y VISIÓN DEL ARCHIVO</h1>
        <p>
          The Abyss Archive nació como un intento de rescatar del olvido
          digital las historias, testimonios y fenómenos que ninguna otra
          plataforma quiso conservar. Esto es lo que nos mueve.
        </p>
      </PostBlock>

      <PostBlock id="mision" numero="002" fecha="2020-01-01" tag="VIGENTE">
        <h2>Misión</h2>
        <p>
          Recopilar, clasificar y preservar historias paranormales, leyendas
          urbanas y experiencias inexplicables compartidas por usuarios de
          internet, evitando que se pierdan en la basura digital de foros
          cerrados, servidores caídos y páginas abandonadas.
        </p>
      </PostBlock>

      <PostBlock id="vision" numero="003" fecha="2020-01-01" tag="VIGENTE">
        <h2>Visión</h2>
        <p>
          Convertirnos en el archivo digital de referencia para quienes
          buscan documentar lo desconocido, construyendo una comunidad
          activa que investigue, discuta y catalogue fenómenos paranormales
          con el mismo rigor con el que se preserva cualquier otro registro
          histórico.
        </p>
      </PostBlock>

      <PostBlock id="valores" numero="004" fecha="2020-01-01">
        <h2>Valores del archivo</h2>

        <h3>Lo que sostenemos</h3>
        <ul>
          <li>Anonimato y protección de quienes comparten sus experiencias</li>
          <li>Preservación de relatos sin alterar su testimonio original</li>
          <li>Libre acceso a todo el contenido del archivo</li>
        </ul>

        <h3>Nuestro proceso de clasificación</h3>
        <ol>
          <li>Recepción del relato o evidencia enviada</li>
          <li>Revisión y categorización por tipo de fenómeno</li>
          <li>Publicación dentro del archivo correspondiente</li>
        </ol>
      </PostBlock>

      <PostBlock numero="005" fecha="2020-01-01">
        <p>
          ¿Quieres saber cómo trabajamos exactamente? Revisa nuestros{" "}
          <a href="/servicios">servicios y procesos</a>, o pasa directo a{" "}
          <a href="/enviar">enviar tu propia historia</a>.
        </p>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default Mision;