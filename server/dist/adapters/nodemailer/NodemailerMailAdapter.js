"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f2aa38e7061678",
        pass: "cfe307f3235a1b"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <suporte@feedget.com>',
            to: 'Lucas Naliato <lucasnaliato07@gmail.com>',
            subject,
            html: body
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
