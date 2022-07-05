import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import App from "./router/App.js";

import messagesEs from "./translations/es.json";
import messagesEn from "./translations/en.json";

const messages = {
  es: messagesEs,
  en: messagesEn,
};
const language = navigator.language.split(/[-_]/)[0];

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>
);
