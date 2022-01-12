import * as React from 'react';

import Header from './Header';
import NavLinks from './NavLinks';

import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const MuiLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <Header>
      {/* <StyledToolbar>
        <Typography variant="h4">
          <MuiLink component={RouterLink} to="/">
            Blog
          </MuiLink>
        </Typography>
        <NavLinks />
      </StyledToolbar> */}
    </Header>
  );
};

export default Nav;
