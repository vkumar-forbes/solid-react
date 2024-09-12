import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StepLayout from "@/components/step-layout";
import App from "./App.tsx";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepLayout>
      <App />
    </StepLayout>
  </StrictMode>
);
