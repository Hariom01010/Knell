import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import { NextResponse } from "next/server";

dotenv.config()

export async function POST(req){
    try{
        const {fname, lname, email, services, serviceInfo, dateOfService, duration, address, priceRange, urgency, phone, instructions } = await req.json();
        console.log(req.json)
    
        const transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: 'New Service Request',
            text: `
            Name: ${fname} ${lname}
            Email: ${email}
            Phone: ${phone}
            Address: ${address}
            Service: ${services}
            Service Info: ${serviceInfo}
            Date of Service: ${dateOfService}
            Duration: ${duration}
            Price Range: ${priceRange}
            Urgency: ${urgency}
            Additional Instructions: ${instructions}
            `,
        })
    
        return NextResponse.json({message: "Email sent successfully" }, { status: 200 })
    } catch(error){
        console.error("Email sending error: ", error)
        return NextResponse.json({ message: "Error sending email" }, { status: 500 })
    }
}