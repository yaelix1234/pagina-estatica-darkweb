import PostBlock from "../components/PostBlock";

function AvisoPrivacidad() {
  return (
    <div className="archive-simple">

      <PostBlock numero="700" fecha="" tag="LEGAL">
        <h1 className="glitch">AVISO DE PRIVACIDAD Y TÉRMINOS LEGALES</h1>
        <p>
          Este documento describe cómo The Abyss Archive trata la información
          proporcionada por los usuarios del sitio.
        </p>
      </PostBlock>

      <PostBlock numero="701" fecha="">
        <h2>Uso de la información</h2>
        <p>
          Los datos proporcionados a través de los formularios de este sitio
          (nombre, correo electrónico, título y descripción de historias) se
          utilizan únicamente para fines de contacto y clasificación dentro
          del archivo. No se comparten con terceros ni se utilizan con fines
          comerciales.
        </p>
      </PostBlock>

      <PostBlock numero="702" fecha="">
        <h2>Anonimato</h2>
        <p>
          Los usuarios pueden enviar sus historias utilizando un seudónimo en
          lugar de su nombre real. El archivo no publica direcciones de
          correo electrónico ni datos de contacto junto con las historias
          publicadas.
        </p>
      </PostBlock>

      <PostBlock numero="703" fecha="">
        <h2>Contenido generado por usuarios</h2>
        <p>
          Las historias, testimonios y comentarios enviados a través de este
          sitio son responsabilidad de quien los envía. The Abyss Archive
          actúa únicamente como plataforma de recopilación y no verifica la
          veracidad de los relatos compartidos.
        </p>
      </PostBlock>

      <PostBlock numero="704" fecha="">
        <h2>Contacto</h2>
        <p>
          Para dudas relacionadas con este aviso, puedes escribirnos a través
          de la <a href="/contacto">página de contacto</a>.
        </p>
      </PostBlock>

    </div>
  );
}

export default AvisoPrivacidad;