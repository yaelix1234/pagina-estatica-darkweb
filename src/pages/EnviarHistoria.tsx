import { useState } from "react";
import ArchiveLayout from "../components/ArchiveLayout";
import PostBlock from "../components/PostBlock";

function EnviarHistoria() {

  const [nombre, setNombre] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");

  const indice = [
    { label: "Formulario", href: "#formulario" },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setEnviando(true);
    setEstado("idle");

    try {
      const res = await fetch("/.netlify/functions/enviar-historia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, titulo, categoria, descripcion }),
      });

      if (!res.ok) {
        throw new Error("Falló el envío");
      }

      setEstado("ok");
      setNombre("");
      setTitulo("");
      setCategoria("");
      setDescripcion("");

    } catch (error) {
      console.error(error);
      setEstado("error");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <ArchiveLayout indice={indice} boardName="enviar">

      <PostBlock numero="500" fecha="" tag="INFO">
        <h1 className="glitch">ENVIAR UNA HISTORIA</h1>
        <p>
          Comparte una experiencia paranormal o una leyenda. Tu relato será
          revisado y clasificado antes de aparecer en el archivo.
        </p>
      </PostBlock>

      <PostBlock id="formulario" numero="501" fecha="">
        <form onSubmit={handleSubmit} className="archive-form">

          <label htmlFor="nombre">Nombre o seudónimo</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="titulo">Título de la historia</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            <option value="aparicion">Aparición</option>
            <option value="lugar-abandonado">Lugar abandonado</option>
            <option value="psicofonia">Psicofonía</option>
            <option value="suceso-inexplicable">Suceso inexplicable</option>
            <option value="caso-sin-resolver">Caso sin resolver</option>
          </select>

          <label htmlFor="descripcion">Descripción del relato</label>
          <textarea
            id="descripcion"
            rows={8}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <button
            type="submit"
            className="archive-button"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar historia"}
          </button>

          {estado === "ok" && (
            <p className="form-status ok">
              Historia enviada correctamente. Gracias por tu aporte al archivo.
            </p>
          )}

          {estado === "error" && (
            <p className="form-status error">
              Ocurrió un error al enviar tu historia. Intenta de nuevo.
            </p>
          )}

        </form>
      </PostBlock>

    </ArchiveLayout>
  );
}

export default EnviarHistoria;