import { transporter } from "../lib/mailer.js";
import { redis } from "../lib/redis.js";
import { Worker } from "bullmq";



const emailWorker = new Worker('email-queue',
    async (job) => {
        const data = job.data;

        console.log(`job processing....id: ${job.id}`);

        /// email sent


        // Send an email using async/await
        (async () => {
            const info = await transporter.sendMail({
                from: 'usmanbanka@gmail.com',
                to: "asharib920@gmail.com",
                subject: "Hello ✔",
                text: "Hello world?", // Plain-text version of the message
                html: "<b>Hello world?</b>", // HTML version of the message
            });

            console.log("Message sent:", info.messageId);
        })();
    },
    {
        connection: redis,
    })


    emailWorker.on('completed', (job)=>{
        console.log(`job completed: ${job}`)
    })

      emailWorker.on('failed', (job)=>{
        console.log(`job failed: ${job}`)
    })