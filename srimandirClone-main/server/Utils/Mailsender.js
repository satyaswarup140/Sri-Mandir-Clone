const nodeMailer = require('nodemailer')
require('dotenv').config()

exports.mailSender = async(email, title, body)=>{
    try {
        let transporter = nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        let info = await transporter.sendMail({
            from:`SRIMANDIR`,
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        
    } catch (error) {
        console.log(error)
    }
}