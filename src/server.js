// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require("intl");

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const requestLanguage = require("express-request-language");
const bodyParser = require("body-parser");
const next = require("next");
const routes = require("./routes");

const config = require("./config");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./src", dev });
const handle = routes.getRequestHandler(app);
// const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
//  app.render(req, res, route.page, query);
// });

console.info(config.locales);
// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();

const getLocaleDataScript = locale => {
  const lang = locale.toString().split("-")[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, "utf8");
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = locale => require(`./messages/${locale}.json`);

app.prepare().then(() => {
  // Use express server
  const server = express();
  server.use(cookieParser());

  // Use body parser
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // Lang on url
  server.use((req, res, next) => {
    const match = req.url.match(/^\/([A-Z]{2})([\/\?].*)?$/i);
    if (match) {
      req.locale = match[1];
      console.info(req.locale);
      req.url = match[2] || "/";
    }
    if (!(config.locales.indexOf(req.locale) > -1)) {
      req.locale = "en";
    }
    next();
  });

  // Getmessages based on lang
  server.use((req, res, next) => {
    req.localeDataScript = getLocaleDataScript(req.locale);

    if (!(req.locale === "en")) {
      req.messages = getMessages(req.locale);
    }
    // res.locals = {
    //  language: req.cookies.language
    // };
    next();
  });

  // server.get("*", (req, res) => handle(req, res));

  // Start server
  server.use(handle).listen(config.port, err => {
    if (err) throw err;
    console.info(`> Read on http://localhost:${config.port}/`);
  });
});
