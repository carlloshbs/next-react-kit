const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: "src/messages/src/",
  translationsDirectory: "src/messages/",
  whitelistsDirectory: "src/messages/whitelists/",
  languages: ["fr", "de", "it", "pt"] // any language you need
});
