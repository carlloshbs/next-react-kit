/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// The document (which is SSR-only) needs to be customized to:
// - expose the locale data for the user's locale for React Intl to work in the browser.
// - styled component use
export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { locale, localeDataScript } } = context;
    return {
      ...props,
      locale,
      localeDataScript
    };
  }

  render() {
    const locale = this.props.locale;
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${this
      .props.locale}`;
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang={locale}>
        <Head>
          <title />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            <script src={polyfill} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: this.props.localeDataScript
              }}
            />
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
