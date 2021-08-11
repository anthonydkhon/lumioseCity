import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Button
} from 'reactstrap';
import './nav.css';

const Navibar = () => {

  return (
    <div className="navBar">
      <Navbar color="light" light expand="md">
        <NavbarBrand></NavbarBrand>
          <Nav className="navContents" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/PokemonSets">Pokemon TCG</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/ComingSoon">Coming Soon</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/SignUp">Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/Login">
                    <Button color="primary">Login</Button>{' '}
                </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div> 
  );
}

export default Navibar;
