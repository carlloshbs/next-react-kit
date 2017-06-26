import { defineMessages } from "react-intl";

const titles = defineMessages({
  index: {
    defaultMessage: "Test",
    id: "sitemap.title.index"
  },
  forms: {
    defaultMessage: "Forms",
    id: "sitemap.title.forms"
  },
  i18n: {
    defaultMessage: "i18n",
    id: "sitemap.title.i18n"
  }
});

const sitemap = {
  index: {
    title: titles.index,
    path: "/"
  },
  forms: {
    title: titles.forms,
    path: "/forms"
  },
  i18n: {
    title: titles.i18n,
    path: "/i18n"
  }
};

export default sitemap;
