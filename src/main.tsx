import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme";
import { router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
);
