import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContentProvider from "./contexts/ContentContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </StrictMode>
);
