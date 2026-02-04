import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MacbookPro } from "./screens/MacbookPro";

// Initialize Firebase
import "./lib/firebase";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MacbookPro />
  </StrictMode>,
);
