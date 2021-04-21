import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button, Container, Grid, Tooltip } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    width: "96%",
  },
  paper: {
    padding: "2%",
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
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
  container: {
    padding: "1%",
  },
  hr: {
    width: "95%",
    float: "left",
    margin: "auto",
  },
}));

export default function All() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={12} lg={8}>
            <Typography className={classes.text} variant="h4">
              László Caputo - Programador Full Stack
            </Typography>
            <Typography className={classes.text} variant="subtitle1">
              Barranquilla - Colombia <img src="colombia.svg" width="20em" />
              {/* <Flags.CO title="colombia" /> */}
            </Typography>
            <br />
            <Typography
              className={classes.text}
              variant="body1"
              align="justify"
              gutterBottom
            >
              Soy capaz de analizar los requisitos solicitados por el cliente
              para desarrollar sistemas (software) que proporcionen soluciones
              tecnológicas en forma de aplicativo web. Totalmente adaptables,
              intuitivos y seguros.
            </Typography>
            <Typography
              className={classes.text}
              align="justify"
              variant="body1"
            >
              Me considero una persona apasionada por lo que hago, comprometido,
              servicial y responsable; <br /> Me gusta solucionar problemas, soy
              autodidacta.
            </Typography>
            <br />
            <Box component="span" m={2} style={{ fontWeight: "bold" }}>
              {" "}
              <Typography className={classes.text} variant="h6">
                Habilidades
              </Typography>
              <Box
                component="div"
                m={2}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                {/* <img src={DjangoImg} width="100em" />
                <img src={SpringSvg} width="100em" />
                <img src={NextSvg} width="100em" /> */}

                {/* <img src={AngularSvg} width="50em" /> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <List className={classes.list}>
              <ListSubheader
                className={classes.subheader}
                style={{ fontWeight: "bold" }}
              >
                Certificaciones
              </ListSubheader>
              <hr className={classes.hr} />
              <>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="certificado adminsitracion de servidores linux"
                      src="linux.webp"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Administración de Servidores Linux"}
                    secondary={"2017"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Certificado Sql y Mysql" src="sql.webp" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Curso de Sql y Mysql"}
                    secondary={"2017"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Certificado Angular" src="angular.webp" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Curso de Angular"}
                    secondary={"2018"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="Certificado en Seguridad Informatica"
                      src="seguridad.webp"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Seguridad Informática para Empresas"}
                    secondary={"2018"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="Certificacion en Python y Django"
                      src="python.webp"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Cursos Python y Django"}
                    secondary={"2018 - 2019"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="Certificacion en Python y Django"
                      src="react.webp"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"React | Gatsby - Nextjs"}
                    secondary={"2020 - 2021"}
                  />
                </ListItem>
              </>
            </List>
          </Grid>
          {/* -----===0===----- */}
        </Grid>
      </Paper>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar style={{ margin: "auto" }}>
          {/*
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
          <Button color="inherit">
            <MailOutlineIcon /> &nbsp; SS
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
