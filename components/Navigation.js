import React from "react";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import styled from "styled-components";

const nav = styled.nav`
  display: flex;
`;
const li = styled.li`
  list-style: none;
  margin-right: 1rem;
`;

export default () =>
  <nav>
    <li>
      <Link href="/">
        <a><FormattedMessage id="nav.home" defaultMessage="Home" /></a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a><FormattedMessage id="nav.about" defaultMessage="About" /></a>
      </Link>
    </li>
  </nav>;
