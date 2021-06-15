
const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport ({
        service: 'gmail',
        auth: {
            user: 'roedvestcontact@gmail.com', //mi email
            pass: 'roedesunkks21' //mi password
        }
    });

    const mailOptions = {
        from: `"${formulario.nombre} 👻" <${formulario.email}>`,
        to: 'herceclase@gmail.com', //destinatario
        subject: formulario.asunto,
        html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br>
        <strong>Email:</strong> ${formulario.email} <br>
        <strong>Mensaje:</strong> ${formulario.mensaje} <br>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
}
