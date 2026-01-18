import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // example
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: "usmanbanka@gmail.com",
    pass: "******",
  },
}
);


