import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Modal,
  TextField,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { createRef, useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useToastContext from "../contexts/ToastContext";
import ReCAPTCHA from "react-google-recaptcha";

const data = {
  title: "László Caputo Programador FullStack",
  location: "Barranquilla - Colombia",
  flag: "colombia.svg",
  resume: `
  Soy un profesional íntegro, capacitado para analizar y
  desarrollar los requisitos solicitados por un cliente
  vanguardista que requiera soluciones tecnológicas en forma de
  web o aplicación movil totalmente adaptables, intuitivas y
  seguras, poseo más de 4 años de experiencia desarrollando software. <br />
  Me caracterizo por ser una persona autodidacta, apasionada por
  lo que hago, comprometido, servicial y responsable; Me gusta
  solucionar problemas relacionados con sistemas tecnológicos. <br />`,
  habilities: "",
  certificates: [
    {
      title: "Sql - MySql",
      year: "2017",
      picture: "sql.webp",
      pdf: "diploma-sql.pdf",
    },
    {
      title: "Administración de Servidores Linux",
      year: "2017",
      picture: "linux.webp",
      pdf: "diploma-linux.pdf",
    },
    {
      title: "Seguridad Informática para Empresas",
      year: "2018",
      picture: "seguridad.webp",
      pdf: "diploma-seguridad-informatica.pdf",
    },
    {
      title: "Python | Django",
      year: "2018",
      picture: "python.webp",
      pdf: "diploma-python.pdf",
    },
    {
      title: "Angular",
      year: "2018",
      picture: "angular.webp",
      pdf: "",
    },
  ],
  udemy: "https://www.udemy.com/user/laszlo-caputo-adam/",
  platzi: "https://platzi.com/p/Laszlo_Caputo/",
  github: "https://github.com/lcaputo/",
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
    width: "96%",
  },
  paper: {},
  list: {},
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign: "center",
    cursor: "pointer",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  hr: {
    width: "100%",
    float: "left",
    margin: "auto",
  },
  IconButton: {
    background: "linear-gradient(45deg, #223131 30%, #009696 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    width: "100%",
    height: 48,
    padding: "0 65px",
    boxShadow: "0 3px 5px 2px rgba(0, 150, 150, .25)",
  },
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #363636",
    boxshadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  inputMaterial: {
    width: "100%",
  },
}));

export default function Resume() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const recaptchaRef = useRef(null);
  const [validCaptcha, setValidCaptcha] = useState(false);

  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const toggleContactModal = () => {
    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
    setContactModalIsOpen(!contactModalIsOpen);
  };

  const [contactFormData, setContactFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    text: "",
    datetime: "",
  });

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const bodyContact = (
    <>
      <TextField
        name="fullname"
        className={classes.inputMaterial}
        label="Nombre y Apellido"
        onChange={handleContactFormChange}
      />
      <br />
      <br />
      <TextField
        name="email"
        type="email"
        requied
        className={classes.inputMaterial}
        label="Email"
        onChange={handleContactFormChange}
      />
      <br />
      <br />
      <TextField
        name="subject"
        type="text"
        requied
        className={classes.inputMaterial}
        label="Asunto"
        onChange={handleContactFormChange}
      />
      <br />
      <br />
      <TextField
        name="text"
        className={classes.inputMaterial}
        label="Mensaje"
        multiline
        rows={3}
        onChange={handleContactFormChange}
      />
    </>
  );

  const onReCAPTCHAChange = (captchaValue) => {
    if (captchaValue) {
      setValidCaptcha(true);
      return;
    }
    setValidCaptcha(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(validCaptcha);
    if (validCaptcha) {
      setIsLoading(true);
      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormData),
        }).then(() => {
          setValidCaptcha(false);
          setContactModalIsOpen(false);
          addSuccessToast("Email enviado con exito!");
        });
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    } else {
      addErrorToast("Completa todos los campos");
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const { addSuccessToast, addErrorToast } = useToastContext();

  return (
    <div>
      <Container className={classes.container}>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Grid container className={classes.root}>
            <Grid item xs={12} lg={9} style={{ padding: "2%" }}>
              <Typography className={classes.text} variant="h4">
                {data.title}
              </Typography>
              <Typography className={classes.text} variant="h6">
                {data.location} &nbsp;
                <img src={data.flag} width="20em" height="13em" />
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                gutterBottom
                style={{ fontSize: "1rem", textAlign: "justify" }}
              >
                {data.resume.split("<br />").map((elm, index) => {
                  return (
                    <>
                      {elm.length >= index ? (
                        <>
                          {elm}
                          <br />
                          <br />
                        </>
                      ) : (
                        <>{elm}</>
                      )}
                    </>
                  );
                })}
              </Typography>
              <Box component="span" style={{ fontWeight: "bold" }}>
                {" "}
                <Typography
                  className={classes.text}
                  variant="inherit"
                  style={{ fontSize: "17px" }}
                >
                  Habilidades
                </Typography>
                <Box
                  component="div"
                  m={2}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img src="django.png" width="80em" height="80em" />
                  <img src="next.svg" width="80em" height="80em" />
                  <img src="docker.png" width="80em" height="80em" />

                  {/* <img src={AngularSvg} width="50em" /> */}
                </Box>
                <Box
                  component="div"
                  m={2}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img src="react-native.png" width="80em" height="80em" />
                  <img src="aws.png" width="80em" height="80em" />
                  <img src="postgres.png" width="80em" height="80em" />

                  {/* <img src={AngularSvg} width="50em" /> */}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <List className={classes.list} style={{ padding: "6%" }}>
                <ListSubheader
                  className={classes.subheader}
                  style={{ fontWeight: "bold" }}
                >
                  Certificaciones
                </ListSubheader>
                <hr className={classes.hr} />
                <>
                  {data.certificates.map((elm, index) => {
                    return (
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar
                            alt={"certificado " + elm.title}
                            src={elm.picture}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={elm.title}
                          secondary={elm.year}
                        />
                      </ListItem>
                    );
                  })}
                  <ListSubheader
                    className={classes.subheader}
                    style={{ fontWeight: "bold" }}
                  >
                    Social
                  </ListSubheader>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Chip
                      avatar={<Avatar alt="Udemy" src="udemy.svg" />}
                      label="Udemy"
                      component="a"
                      target="_blank"
                      href={data.udemy}
                      clickable
                    />
                    <Chip
                      avatar={<Avatar alt="Platzi" src="platzi.png" />}
                      label="Platzi"
                      component="a"
                      target="_blank"
                      href={data.platzi}
                      clickable
                    />
                    <Chip
                      avatar={<Avatar alt="GitHub" src="github.svg" />}
                      label="GitHub"
                      component="a"
                      target="_blank"
                      href={data.github}
                      clickable
                    />
                  </div>
                </>
              </List>
            </Grid>
            {/* -----===0===----- */}
          </Grid>
        </Paper>

        <Toolbar
          style={{
            marginLeft: "auto",
            marginBottom: "0.5%",
            padding: 0,
          }}
        >
          <Button
            color="inherit"
            className={classes.IconButton}
            onClick={() => toggleContactModal()}
          >
            <MailOutlineIcon /> &nbsp; CONTACTAR
          </Button>
        </Toolbar>
      </Container>
      <Modal
        disableBackdropClick
        open={contactModalIsOpen}
        onClose={toggleContactModal}
      >
        <div className={classes.modal}>
          <h3>Formulario de Contacto</h3>
          {isLoading ? (
            <>
              <br />
              <CircularProgress color="primary" />
            </>
          ) : (
            <>{bodyContact}</>
          )}
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
          </div>
          <br />
          <div align="right">
            <Button
              variant="contained"
              color="secondary"
              disabled={isLoading}
              onClick={toggleContactModal}
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
        </div>
      </Modal>
    </div>
  );
}
