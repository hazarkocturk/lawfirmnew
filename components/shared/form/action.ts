'use server';

import { sendContactEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/email";

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

    await sendContactEmail(data);
    return { success: true };
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return { success: false, error: (error as Error).message };
  }
}
