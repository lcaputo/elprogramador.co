import { makeStyles, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import useToastContext from '../contexts/ToastContext';
import CircularProgress from "@material-ui/core/CircularProgress";
import ReCAPTCHA from "react-google-recaptcha";


const useStyles = makeStyles((theme) =>({
    inputMaterial: {
        width: "100%",
      },
}))

const Formulario = ({toggle}) => {
    const classes = useStyles();
    //const nodemailer = require("nodemailer");
    
    const [isLoading, setIsLoading] = useState(false);

    const [validCaptcha, setValidCaptcha] = useState(false);

    const { addSuccessToast, addErrorToast } = useToastContext();

    const [contactFormData, setContactFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        text: "",
        datetime: "",
    })

    function onReCAPTCHAChange(captchaValue) {
        if (captchaValue.length > 400) {
          setValidCaptcha(true);
        } else {
          setValidCaptcha(false);
        }
      };
    

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setContactFormData({
            ...contactFormData,
            [event.target.name] : event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    async function sendmail(mail) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.CONTACT_SENDER_EMAIL, // generated ethereal user
            pass: process.env.CONTACT_SENDER_PASSWORD, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        await transporter.sendMail({
          from: `"${mail.fullname}" <contact@mail.com>`, // sender address
          to: process.env.CONTACT_EMAIL, // list of receivers
          subject: mail.subject, // Subject line
          text: `De: ${mail.email} \n${req.body.text}`, // plain text body
        });
      }
    
  const bodyContact = (
    <>
      <TextField
        name="fullname"
        className={classes.inputMaterial}
        label="Nombre y Apellido"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <TextField
        name="email"
        type="email"
        requied
        className={classes.inputMaterial}
        label="Email"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <TextField
        name="subject"
        type="text"
        requied
        className={classes.inputMaterial}
        label="Asunto"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <TextField
        name="text"
        className={classes.inputMaterial}
        label="Mensaje"
        multiline
        rows={4}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
      </div>
    </>
  );

  //TODO:
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(validCaptcha);
    if (validCaptcha) {
      content = JSON.stringify(contactFormData),
      sendmail(content);

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          
        }).then(() => {
          setValidCaptcha(false);
          setContactModalIsOpen(false);
          addSuccessToast("Email enviado con exito!");
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      addErrorToast("Completa todos los campos");
    }
    await sleep(2000);
    setIsLoading(false);
  };

    return (
        <>
            <h3>Formulario de Contacto</h3>
          {isLoading ? (
            <>
              <br />
              <CircularProgress color="primary" />
            </>
          ) : (
            <>{bodyContact}</>
          )}
          <div align="right" style={{ marginTop: "5%" }}>
            <Button
              variant="contained"
              color="secondary"
              disabled={isLoading}
              onClick={toggle}
            >
              Cancelar
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </div>
        </>
    );


}

export default Formulario;