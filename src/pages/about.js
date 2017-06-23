import React from "react";
import pageWithIntl from "../components/PageWithIntl";
import Layout from "../components/Layout";

const About = props =>
  <Layout>
    <p>
      <a>{props.url.query.lang}</a>
    </p>
  </Layout>;

export default pageWithIntl(About);
