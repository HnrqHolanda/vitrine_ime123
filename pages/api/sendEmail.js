import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, instituição, CNPJ, email, mensagem } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vitrineteste12@gmail.com',
                pass: 'gvav fhxv wima jcjs',
            },
        });

        try {
            // Envia o e-mail para o usuário
            await transporter.sendMail({
                from: 'vitrineteste12@gmail.com',
                to: email,
                subject: 'Confirmação de recebimento do formulário',
                text: `Olá ${nome}, recebemos sua mensagem com sucesso! Em breve entraremos em contato.`,
            });

            // Envia o e-mail para você mesmo
            await transporter.sendMail({
                from: 'vitrineteste12@gmail.com',
                to: 'vitrineteste12@gmail.com',
                subject: 'Nova mensagem recebida através do formulário',
                text: `Nome: ${nome}\nInstituição: ${instituição}\n CNPJ: ${CNPJ}\n Email: ${email}\nMensagem: ${mensagem}`,
            });

            res.status(200).json({ message: 'E-mails enviados com sucesso!' });
        } catch (error) {
            console.error('Erro ao enviar e-mails:', error);
            res.status(500).json({ message: 'Erro ao enviar e-mails.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}