import "../styles/globals.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009696",
    },
    secondary: {
      main: "#2B3D41",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </MuiThemeProvider>
  );
}

export default MyApp;
