import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/layout/index.tsx";

import "@/styles/globals.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout
      currentStep={1}
      totalStep={3}
      isEmptyLayout={false}
      navigateBack={() => console}
      sidebarTitle="Why Choose Us?"
    >
      <App />
    </Layout>
  </StrictMode>
);
