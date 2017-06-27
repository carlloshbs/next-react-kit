import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import config from "../config";

// The document (which is SSR-only) needs to be customized to:
// - expose the locale data for the user's locale for React Intl to work in the browser.
// - styled component use
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { locale, localeDataScript, locales } } = context;
    return {
      ...props,
      locale,
      localeDataScript,
      locales
    };
  }

  render() {
    const { locale, localeDataScript, locales } = this.props;
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    const alternateHrefMain = (
      <link
        href={`https://${config.domain}:3000/`}
        hrefLang="en"
        key="en"
        rel="alternate"
      />
    );
    const alternateHreflangLinks = config.locales.map(locale1 =>
      <link
        href={`https://${config.domain}:3000/${locale1}`}
        hrefLang={locale1}
        key={locale1}
        rel="alternate"
      />
    );

    return (
      <html lang={locale}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta
            name="msapplication-config"
            content="/static/favicons/browserconfig.xml"
          />
          <meta
            name="viewport"
            // kihlstrom.com/2015/shrink-to-fit-no-fixes-zoom-problem-in-ios-9
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {alternateHrefMain}
          {alternateHreflangLinks}
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {/* Polyfill Intl API for older browsers */}
            <script
              src={`https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}`}
            />
            <script // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: localeDataScript }}
            />
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
