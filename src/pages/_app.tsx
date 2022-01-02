import React from "react";
import type { AppProps } from "next/app";

import { store } from "store";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import defaultTheme from "styles/themes/default";

import GlobalStyle from "styles/global";

import { Template } from "templates";

import { I18nextProvider } from "react-i18next";
import i18n from "i18n";
import { ToastNotification } from "components/ToastNotification";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <ToastNotification />
          <Template>
            <Component {...pageProps} />
          </Template>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default MyApp;
