import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f2aa38e7061678",
      pass: "cfe307f3235a1b"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <suporte@feedget.com>',
            to: 'Lucas Naliato <lucasnaliato07@gmail.com>',
            subject,
            html: body
        }) 
    }
}