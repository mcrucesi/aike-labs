// import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // const resend = new Resend(process.env.RESEND_API_KEY);

    // await resend.emails.send({
    //   from: "Aike Labs <contacto@aikelabs.cl>",
    //   to: process.env.CONTACT_EMAIL || "mcrucesillesca@gmail.com",
    //   replyTo: email,
    //   subject: `Nuevo mensaje de ${name} — aikelabs.cl`,
    //   html: `
    //     <h2>Nuevo mensaje desde aikelabs.cl</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${message.replace(/\n/g, "<br>")}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
