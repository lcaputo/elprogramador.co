import Head from "next/head";
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
import { Box, Button, Chip, Container, Grid } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styles from "../styles/Home.module.css";

const data = {
  title: "László Caputo Programador FullStack",
  location: "Barranquilla - Colombia",
  flag: "colombia.svg",
  resume: `
  Soy un profesional íntegro, capacitado para analizar y
  desarrollar los requisitos solicitados por un cliente
  vanguardista que requiera soluciones tecnológicas en forma de
  web o aplicación movil totalmente adaptables, intuitivas y
  seguras.
  Me caracterizo por ser una persona autodidacta, apasionada por
  lo que hago, comprometido, servicial y responsable; Me gusta
  solucionar problemas relacionados con sistemas tecnológicos.`,
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
      year: "2018 - 2019",
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
    background: "linear-gradient(45deg, #363636 30%, #009696 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    width: "100%",
    height: 48,
    padding: "0 65px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Laszlo Programador FullStack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
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
                  align="justify"
                  gutterBottom
                  style={{ fontSize: "1.1rem" }}
                >
                  {data.resume.split(".").map((elm, index) => {
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
            <Button color="inherit" className={classes.IconButton}>
              <MailOutlineIcon /> &nbsp; CONTACTAR
            </Button>
          </Toolbar>
        </Container>
      </main>
    </div>
  );
}
