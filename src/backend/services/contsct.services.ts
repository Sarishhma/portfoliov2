//Think of the service as the part that answers:

//"What should my application actually do?"

//In your contact form, the application needs to send an email. That's the business operation, so it belongs in the service.

import { transporter } from "@/backend/lib/email/transporter";
import { ContactFormInput } from "@/backend/lib/validations/contact.schema";
export async function sendContactMessage(data:ContactFormInput){
    const {name,email,message}=data
    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to:process.env.EMAIL_USER,
        replyTo:email,
        subject:`Portfolio Contact:${name}`,
        text:`
        Name:${name},
        Email:${email},
        Message:
${message}
    `,

    html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <h3>Message</h3>
      <p>${message.replace(/\n/g, '<br />')}</p>,
    
        `
    })
}