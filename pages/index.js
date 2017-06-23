import React, { Component } from "react";
import { FormattedRelative } from "react-intl";
import styled from "styled-components";
import pageWithIntl from "../components/PageWithIntl";
import Layout from "../components/Layout";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class Home extends Component {
  static async getInitialProps({ req }) {
    return { someDate: Date.now() };
  }

  render() {
    return (
      <Layout>
        <p>
          <Title>
            <FormattedRelative
              value={this.props.someDate}
              updateInterval={1000}
            />
          </Title>
        </p>
      </Layout>
    );
  }
}

export default pageWithIntl(Home);
