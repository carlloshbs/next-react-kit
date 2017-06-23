import React from "react";
import { FormattedMessage } from "react-intl";
import { Link, Router } from "../routes";
import styled from "styled-components";

const nav = styled.nav`
  display: flex;
`;
const li = styled.li`
  list-style: none;
  margin-right: 1rem;
`;
const a = styled.a`
  color: red;
`;
export default () =>
  <nav>
    <li>
      <Link route="/" params={{ lang: "fr" }} pages="index.js">
        <a><FormattedMessage id="nav.fr" defaultMessage="FR" /></a>
      </Link>
    </li>
    <li>
      <Link route="about" params={{ lang: "en" }}>
        <a><FormattedMessage id="nav.en" defaultMessage="en" /></a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a><FormattedMessage id="nav.about" defaultMessage="About" /></a>
      </Link>
    </li>
  </nav>;
