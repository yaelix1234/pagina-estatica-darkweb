import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Aliados() {
  const indice = [
    { label: "Colaboradores", href: "#colaboradores" },
    { label: "Menciones", href: "#menciones" },
  ];

  return (
    <ArchiveLayout indice={indice} boardName="aliados">

      <PostBlock numero="400" fecha="" tag="INFO">
        <h1 className="glitch">ALIADOS DEL ARCHIVO</h1>
        <p>
          Comunidades, investigadores independientes y colectivos que
          comparten material, difunden el archivo o colaboran en la
          verificación de casos.
        </p>
      </PostBlock>

      <PostBlock id="colaboradores" numero="401" fecha="" tag="4 GRUPOS">
        <h2>Colaboradores</h2>

        <div className="aliados-grid grid sm:grid-cols-2 gap-3">

          <div className="aliado-card">
            <h3>Nocturnal Research Group</h3>
            <p>Investigadores independientes de fenómenos inexplicables.</p>
          </div>

          <div className="aliado-card">
            <h3>Foro Paranormal LATAM</h3>
            <p>Comunidad que comparte y discute relatos paranormales.</p>
          </div>

          <div className="aliado-card">
            <h3>Archivo Sonoro Anónimo</h3>
            <p>Colectivo dedicado a la recolección de psicofonías.</p>
          </div>

          <div className="aliado-card">
            <h3>Red de Exploradores Urbanos</h3>
            <p>Documentan lugares abandonados asociados a casos activos.</p>
          </div>

        </div>
      </PostBlock>

      <PostBlock id="menciones" numero="402" fecha="">
        <h2>Menciones externas</h2>
        <ul>
          <li>
            Canal de investigación en{" "}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
          <li>
            Comunidad activa en{" "}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </li>
          <li>
            Actualizaciones del archivo en{" "}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default Aliados;