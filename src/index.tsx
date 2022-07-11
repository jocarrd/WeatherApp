import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import App from "./router/App";
import { translations } from "./translations/translations";

const language = navigator.language.split(/[-_]/)[0];

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
const messages = (translations as any)[language];

root.render(
  <IntlProvider locale={language} defaultLocale="es" messages={messages}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>
);
