import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import "./index.css";
import App from "./App";

export const myTheme: MantineThemeOverride = {
  colors: {
    azure: [
      "#A0B3FD",
      "#7E96FC",
      "#5D7AFB",
      "#2B3EA9",
      "#3F5BF6",
      "#364FDB",
      "#3F5BF6", //primary color
      "#1F2B76",
      "#131843",
      "#070F10",
    ],
  },
  primaryColor: "azure",
  fontFamily: "Work Sans, sans-serif",
};

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
