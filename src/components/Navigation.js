import React from "react";
import { Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavbarBrand href="/">Dad Jokes</NavbarBrand>
        <NavItem>
          <NavLink href="/">Jokes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">Sign Up </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login </NavLink>
        </NavItem>
      </Nav>
      <br />
    </div>
  );
};

export default Navigation;
