import { useState } from "react";
import PostBlock from "../components/PostBlock";

function Contacto() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setEnviando(true);
    setEstado("idle");

    try {
      const res = await fetch("/.netlify/functions/enviar-contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });

      if (!res.ok) {
        throw new Error("Falló el envío");
      }

      setEstado("ok");
      setNombre("");
      setCorreo("");
      setMensaje("");

    } catch (error) {
      console.error(error);
      setEstado("error");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="archive-simple">

      <PostBlock numero="600" fecha="" tag="CONTACTO">
        <h1 className="glitch">CONTACTO</h1>
        <p>
          ¿Tienes dudas, sugerencias o quieres colaborar con el archivo?
          Escríbenos directamente.
        </p>
      </PostBlock>

      <PostBlock numero="601" fecha="">
        <form onSubmit={handleSubmit} className="archive-form">

          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows={6}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button
            type="submit"
            className="archive-button"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>

          {estado === "ok" && (
            <p className="form-status ok">
              Mensaje enviado correctamente. Te responderemos pronto.
            </p>
          )}

          {estado === "error" && (
            <p className="form-status error">
              Ocurrió un error al enviar tu mensaje. Intenta de nuevo.
            </p>
          )}

        </form>
      </PostBlock>

    </div>
  );
}

export default Contacto;