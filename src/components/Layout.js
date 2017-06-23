import React from "react";
import { defineMessages, injectIntl } from "react-intl";
import Head from "next/head";
import Nav from "./Navigation";

const messages = defineMessages({
  title: {
    id: "title",
    defaultMessage: "Home"
  }
});

export default injectIntl(({ intl, children }) =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{intl.formatMessage({ id: "messages.title" })}</title>
    </Head>

    <header>
      <Nav />
    </header>

    {children}

  </div>
);
