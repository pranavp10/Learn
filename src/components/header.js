import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

      @media (min-width: 900px) {
        padding: 0.5rem calc((100vw - 850px - 0.5rem) / 2);
      }
      @media (max-width: 450px) {
        padding: 0.5rem calc((100vw - 318px - 0.5rem) / 2);
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      <img
        css={css`
          margin: 0;
          width: 25px;
        `}
        src="https://img.icons8.com/cute-clipart/1024/000000/book.png"
        alt="logo.js"
      />
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
