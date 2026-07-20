import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function Servicios() {
  const indice = [
    { label: "Recopilación", href: "#recopilacion" },
    { label: "Clasificación", href: "#clasificacion" },
    { label: "Exploración", href: "#exploracion" },
    { label: "Análisis", href: "#analisis" },
    { label: "Comparativa", href: "#comparativa" },
  ];

  return (
    <ArchiveLayout indice={indice} boardName="servicios">

      <PostBlock numero="100" fecha="" tag="INFO">
        <h1 className="glitch">SERVICIOS DEL ARCHIVO</h1>
        <p>
          No vendemos nada. Esto es lo que el archivo hace por cada historia
          que recibe.
        </p>
      </PostBlock>

      <PostBlock id="recopilacion" numero="101" fecha="" tag="ACTIVO">
        <h2>Recopilación de historias</h2>
        <p>
          Recibimos relatos paranormales enviados por la comunidad a través
          del <a href="/enviar">formulario de envío</a>, sin importar su
          extensión o formato original.
        </p>
      </PostBlock>

      <PostBlock id="clasificacion" numero="102" fecha="" tag="ACTIVO">
        <h2>Clasificación de casos</h2>
        <p>
          Cada historia se organiza según el tipo de fenómeno que describe,
          para que explorar el archivo sea posible por categoría y no solo
          por orden de llegada.
        </p>
      </PostBlock>

      <PostBlock id="exploracion" numero="103" fecha="" tag="ACTIVO">
        <h2>Exploración de archivos</h2>
        <p>
          El catálogo completo puede recorrerse libremente desde{" "}
          <a href="/historias">Historias</a>, sin necesidad de registro ni
          cuentas de usuario.
        </p>
      </PostBlock>

      <PostBlock id="analisis" numero="104" fecha="" tag="EN DESARROLLO">
        <h2>Análisis de evidencia</h2>
        <p>
          Cuando un relato incluye fotografías, audios o videos, el archivo
          conserva ese material junto al testimonio como parte del caso.
        </p>
      </PostBlock>

      <PostBlock id="comparativa" numero="105" fecha="">
        <h2>Comparativa de servicios</h2>

        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Entrada</th>
              <th>Salida</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recopilación</td>
              <td>Formulario de historias</td>
              <td>Relato archivado</td>
              <td>Activo</td>
            </tr>
            <tr>
              <td>Clasificación</td>
              <td>Relato sin categorizar</td>
              <td>Caso etiquetado</td>
              <td>Activo</td>
            </tr>
            <tr>
              <td>Exploración</td>
              <td>Catálogo completo</td>
              <td>Lectura libre</td>
              <td>Activo</td>
            </tr>
            <tr>
              <td>Análisis de evidencia</td>
              <td>Fotos, audio, video</td>
              <td>Caso documentado</td>
              <td>En desarrollo</td>
            </tr>
          </tbody>
        </table>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default Servicios;