import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { nombre, titulo, categoria, descripcion } = data;

    if (!nombre || !titulo || !descripcion) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Faltan campos obligatorios" }),
      };
    }

    await resend.emails.send({
      from: "The Abyss Archive <onboarding@resend.dev>",
      to: process.env.MI_CORREO as string,
      subject: `Nueva historia enviada: ${titulo}`,
      html: `
        <h2>Nueva historia recibida</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Título:</strong> ${titulo}</p>
        <p><strong>Categoría:</strong> ${categoria || "Sin categoría"}</p>
        <p><strong>Descripción:</strong></p>
        <p>${descripcion}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ mensaje: "Historia enviada correctamente" }),
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al enviar el correo" }),
    };
  }
};

export { handler };