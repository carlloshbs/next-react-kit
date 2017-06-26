import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Link, Router } from "../routes";

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
      <Link href="/">
        <a>
          <FormattedMessage id="nav.fr" defaultMessage="FR" />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>
          <FormattedMessage id="nav.about" defaultMessage="About" />
        </a>
      </Link>
    </li>
  </nav>;
