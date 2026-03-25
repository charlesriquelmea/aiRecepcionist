import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const mailPrimero = process.env.MAILPRIMERO || '';
const mailSegundo = process.env.MAILSEGUNDO || '';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, businessType, leadsPerMonth, challenges, lang } = body;

        
        const fromEmail = 'business@business.protolylat.com' //el que va
        /* const fromEmail = 'onboarding@resend.dev' */ // solo para pruebas

        if (!mailPrimero) {
            return NextResponse.json({ error: "ADMIN_EMAIL not configured" }, { status: 500 });
        }

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [mailPrimero],
            cc: [mailSegundo], //lo que va
            /* to: ["test@mail.com"], */
            subject: `Nueva auditoría de revenue — ${name}`,
            html: buildEmailHtml({ name, email, whatsapp, businessType, leadsPerMonth, challenges, lang }),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

function buildEmailHtml({
    name,
    email,
    whatsapp,
    businessType,
    leadsPerMonth,
    challenges,
    lang,
}: {
    name?: string;
    email?: string;
    whatsapp?: string;
    businessType?: string;
    leadsPerMonth?: string;
    challenges?: string[];
    lang?: string;
}) {
    const isEn = lang === "en";
    const challengesList = challenges && challenges.length > 0
        ? challenges.map((c) => `<li style="margin-bottom:6px;">${c}</li>`).join("")
        : `<li style="color:#6B6B7A;">${isEn ? "None selected" : "Ninguno seleccionado"}</li>`;

    return `
<!DOCTYPE html>
<html lang="${isEn ? "en" : "es"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${isEn ? "New Revenue Audit" : "Nueva Auditoría de Revenue"}</title>
</head>
<body style="margin:0;padding:0;background-color:#07070A;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#07070A;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;font-weight:600;">
                ${isEn ? "Revenue Audit" : "Auditoría de Revenue"}
              </p>
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#F5F5F0;line-height:1.3;">
                ${isEn ? "New lead from the form" : "Nuevo lead del formulario"}
              </h1>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="height:1px;background:linear-gradient(to right,transparent,#C9A84C,transparent);"></div>
            </td>
          </tr>

          <!-- CONTACT CARD -->
          <tr>
            <td style="background-color:#0F0F14;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:28px 32px;margin-bottom:24px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C9A84C;">
                ${isEn ? "Contact" : "Contacto"}
              </p>
              <h2 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#F5F5F0;">${name || "—"}</h2>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-bottom:10px;">
                    <span style="font-size:12px;color:#6B6B7A;display:block;margin-bottom:2px;">${isEn ? "Email" : "Correo"}</span>
                    <a href="mailto:${email}" style="font-size:15px;color:#C9A84C;text-decoration:none;">${email || "—"}</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-size:12px;color:#6B6B7A;display:block;margin-bottom:2px;">WhatsApp</span>
                    <a href="https://wa.me/${(whatsapp || "").replace(/\D/g, "")}" style="font-size:15px;color:#C9A84C;text-decoration:none;">${whatsapp || "—"}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td style="height:16px;"></td></tr>

          <!-- BUSINESS INFO -->
          <tr>
            <td style="background-color:#0F0F14;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:28px 32px;">
              <p style="margin:0 0 20px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C9A84C;">
                ${isEn ? "Business Info" : "Datos del negocio"}
              </p>

              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:12px;color:#6B6B7A;display:block;margin-bottom:4px;">
                      ${isEn ? "Business type" : "Tipo de negocio"}
                    </span>
                    <span style="font-size:15px;color:#F5F5F0;font-weight:600;">${businessType || "—"}</span>
                  </td>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:12px;color:#6B6B7A;display:block;margin-bottom:4px;">
                      ${isEn ? "Leads / month" : "Leads / mes"}
                    </span>
                    <span style="font-size:15px;color:#F5F5F0;font-weight:600;">${leadsPerMonth || "—"}</span>
                  </td>
                </tr>
              </table>

              <!-- DIVIDER -->
              <div style="height:1px;background:rgba(255,255,255,0.06);margin:8px 0 20px;"></div>

              <p style="margin:0 0 12px;font-size:12px;color:#6B6B7A;">
                ${isEn ? "Main challenges" : "Principales desafíos"}
              </p>
              <ul style="margin:0;padding-left:18px;color:#F5F5F0;font-size:14px;line-height:1.6;">
                ${challengesList}
              </ul>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding-top:32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#6B6B7A;">
                ${isEn
            ? "This lead was submitted via the Revenue Audit form on your website."
            : "Este lead fue enviado a través del formulario de Auditoría de Revenue en tu sitio web."}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}