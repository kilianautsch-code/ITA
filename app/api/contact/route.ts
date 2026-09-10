import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, firma, email, telefon, nachricht } = await request.json()

    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"ITA Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage über die ITA-Website von ${name}`,
      text: `
Neue Anfrage über die Website

Name: ${name}
Firma: ${firma || "-"}
E-Mail: ${email}
Telefon: ${telefon || "-"}

Anliegen:
${nachricht}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mailversand fehlgeschlagen:", error)

    return NextResponse.json(
      { error: "Die Anfrage konnte nicht gesendet werden." },
      { status: 500 }
    )
  }
}
