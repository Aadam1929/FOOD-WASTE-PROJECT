import { MantineProvider } from "@mantine/core";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./navBar";
import Footer from "./footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <NavBar />
      <App />
      <Footer />
    </MantineProvider>
  </React.StrictMode>
);
