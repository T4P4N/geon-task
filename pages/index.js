import { AppProvider } from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/build/esm/styles.css";
import App from "./App";
import React from "react";

export default function Home() {

  return (
    <AppProvider i18n={en}>
      <App />
    </AppProvider>
  )
}
