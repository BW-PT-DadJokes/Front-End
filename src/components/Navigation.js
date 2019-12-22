import React from "react";
import { Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavbarBrand href="/">Dad Jokes</NavbarBrand>
        <NavItem>
          <NavLink href="https://bw-pt-dadjokes.github.io/Landing-Page/index.html">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://bw-pt-dadjokes.github.io/Landing-Page/about-us.html">
            About Us
          </NavLink>
        </NavItem>
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
