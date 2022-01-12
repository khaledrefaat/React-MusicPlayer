import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';

const bp1200 = 75;
const bp900 = 56.25;
const bp768 = 48;
const bp600 = 37.5;

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const List = styled.ul`
    list-style: none;
    display: flex;
    position: absolute;
    top: 2.5rem;
    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background-color: #1976d2;
    padding: 1rem 0;
    ${!isOpen && 'display: none;'}

    @media only screen and (min-width: ${bp600}em) {
      top: 3rem;
    }

    @media only screen and (min-width: ${bp768}em) {
      display: flex;
      justify-content: space-around;
      position: relative;
      flex-direction: row;
      top: 0;
      width: 65%;
    }

    @media only screen and (min-width: ${bp900}em) {
      width: 60%;
    }

    @media only screen and (min-width: ${bp1200}em) {
      width: 45%;
    }
  `;

  const ListItem = styled.li`
    cursor: pointer;
    margin: 1rem 0;
    text-align: center;

    @media only screen and (min-width: ${bp768}em) {
      margin: 0;
    }

    &:hover > a {
      color: #fdcb6e;
    }
  `;

  const MuiLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.25rem;
  `;

  // const Menu = styled(MenuIcon)`
  //   cursor: pointer;
  //   @media only screen and (min-width: 48em) {
  //     display: none;
  //   }
  // `;

  return (
    <>
      {/* <Menu onClick={() => setIsOpen(isOpen => !isOpen)} /> */}
      <List>
        <ListItem>
          <MuiLink component={RouterLink} to="/">
            Articles
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/">
            New Article
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/">
            My Articles
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/">
            Users
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/auth">
            Login
          </MuiLink>
        </ListItem>
      </List>
    </>
  );
};

export default NavLinks;
