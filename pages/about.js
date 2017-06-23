import React from "react";
import pageWithIntl from "../components/PageWithIntl";
import Layout from "../components/Layout";

const About = ({ name }) => {
  const test = event => {
    e.preventDefault();
    console.error("test");
  };
  return (
    <Layout>
      <p>
        <a href="#" onClick={test}>Test</a>
      </p>
    </Layout>
  );
};

export default pageWithIntl(About);
