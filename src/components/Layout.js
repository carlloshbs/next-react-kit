import React from "react";
import { injectIntl } from "react-intl";
import Head from "next/head";
import Navigation from "./Navigation";

export default injectIntl(({ intl, children }) =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <header>
      <Navigation />
    </header>

    {children}

  </div>
);
