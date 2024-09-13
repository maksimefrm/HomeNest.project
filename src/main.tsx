import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme";
import { router } from "./routers";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="container">
              <RouterProvider router={router} />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
