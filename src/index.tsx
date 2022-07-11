import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import App from "./router/App";

import { translations } from "./translations/translations";

const language = navigator.language.split(/[-_]/)[0];

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <IntlProvider locale={language} messages={translations[language]}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>
);
