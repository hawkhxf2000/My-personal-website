import type {NextApiRequest} from "next";
import nodemailer from "nodemailer";
// import Mail from 'nodemailer/lib/mailer'

// interface Data {
//     name: string;
//     email: string;
//     message: string;
// }

export default async function(req:NextApiRequest){
    console.log("request body",req.body)
    // return res.status(200).json({message: "The mail has been sent!"});
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "hawkhxf2000@gmail.com",
            pass: 
        },
        logger: true
    });

    const info = await transporter.sendMail({
        from: `"${req.body.name}" <${req.body.email}>`,
        to: "hawkhxf2000@gmail.com",
        subject: "Hello from my personal web",
        // text: "Hello world?",
        html: `<p>${req.body.message}</p>`,
        headers: {'x-myheader': 'test header'}
    });

    console.log('return message', info)
}
