import type {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";
// import Mail from 'nodemailer/lib/mailer'

// interface Data {
//     name: string;
//     email: string;
//     message: string;
// }

export default async function(req:NextApiRequest, res:NextApiResponse){
    console.log("request body",req.body)
    // return res.status(200).json({message: "The mail has been sent!"});
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_KEY,
        },
        logger: true
    });

    const info = await transporter.sendMail({
        from: `"${req.body.name}" <${req.body.email}>`,
        to: "hawkhxf2000@gmail.com",
        subject: "Hello from my personal web",
        // text: "Hello world?",
        html: `
            <p>${req.body.name}</p>
            <p>${req.body.email}</p>
            <p>${req.body.message}</p>
         `,
        headers: {'x-myheader': 'test header'}
    });

    // console.log('return message', info)

    // res.status(200);
    res.status(200).json({info});
}