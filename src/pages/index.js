import React from "react";
import { FormattedMessage, FormattedNumber, defineMessages } from "react-intl";
import Head from "next/head";
import styled from "styled-components";
import pageWithIntl from "../components/PageWithIntl";
import Layout from "../components/Layout";

const { description } = defineMessages({
  description: {
    id: "description",
    defaultMessage: "Test"
  }
});

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = ({ name }) =>
  <Layout>
    <Head>
      <Title>Test</Title>
    </Head>
    <p>
      <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
    </p>
    <p>
      <FormattedNumber value={1000} />
    </p>
  </Layout>;

export default pageWithIntl(Home);
