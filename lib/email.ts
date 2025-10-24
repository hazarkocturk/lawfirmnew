import nodemailer from "nodemailer";

export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstname, lastname, email, phonenumber, message } = data;
  
  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.RESEND_SMTP_USER, 
      pass: process.env.RESEND_SMTP_PASSWORD, 
    },
  });

  const fromAddress = process.env.EMAIL_FROM;
  const toAddress = process.env.EMAIL_TO || fromAddress;

  const mailOptions = {
    from: "test@RESPONSE_LIMIT_DEFAULT.com",
    to: process.env.EMAIL_TO,
    subject: `Yeni İletişim Formu - ${firstname} ${lastname}`,
    text: `
Yeni bir mesaj aldınız:

Ad: ${firstname}
Soyad: ${lastname}
E-posta: ${email}
Telefon: ${phonenumber}

Mesaj:
${message}
    `,
  };

  if (!fromAddress || !toAddress) {
    throw new Error("EMAIL_FROM veya EMAIL_TO tanımlı değil (.env.local kontrol et)");
  }

  await transporter.sendMail(mailOptions);
}

// export async function sendContactEmail(data: any) {
//     const { firstname, lastname, email, phonenumber, message } = data;
  
//     // Test hesabı oluştur (her seferinde yeni)
//     const testAccount = await nodemailer.createTestAccount();
  
//     const transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });
  
//     const info = await transporter.sendMail({
//       from: `"${firstname} ${lastname}" <${testAccount.user}>`,
//       to: testAccount.user, // kendine gönder
//       subject: `Test İletişim Formu - ${firstname} ${lastname}`,
//       text: `
//   Ad: ${firstname}
//   Soyad: ${lastname}
//   E-posta: ${email}
//   Telefon: ${phonenumber}
//   Mesaj: ${message}
//       `,
//     });
  
//     console.log("📨 Test email sent:", nodemailer.getTestMessageUrl(info));
//   }
