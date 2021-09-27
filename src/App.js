import React from "react";
import "./App.css";
import teal from "@material-ui/core/colors/teal";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import ApiContextProvider from "./context/ApiContext";
import Routes from "./components/Routes";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
