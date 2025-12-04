// components/shared/form/action.ts
"use server";

import { Resend } from "resend";
import type { ContactFormData } from "@/lib/email";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY .env içinde tanımlı değil");
}

const resend = new Resend(resendApiKey);

export async function SendForm(data: ContactFormData) {
  try {
    if (
      !data.firstname ||
      !data.lastname ||
      !data.email ||
      !data.phonenumber ||
      !data.message
    ) {
      throw new Error("Eksik bilgi");
    }

    // Asıl mail gönderme işlemi
    const response = await resend.emails.send({
      from: "İletişim <iletisim@kocturksahinhukuk.com>",
      to: "kocturksahinhukukburosu@gmail.com",
      subject: `Yeni İletişim Formu - ${data.firstname} ${data.lastname}`,
      text: `
Ad: ${data.firstname}
Soyad: ${data.lastname}
Email: ${data.email}
Telefon: ${data.phonenumber}
Mesaj: ${data.message}
      `,
    });

    // Response içindeki error alanını tek başına çekiyoruz
    const error = response.error;

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Mail gönderilemedi.");
    }

    return { success: true };
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return { success: false, error: (error as Error).message };
  }
}
