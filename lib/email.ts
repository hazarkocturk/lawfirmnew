export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  message: string;
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
