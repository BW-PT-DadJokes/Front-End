import React from "react";
import Logo from "../favicon-32x32.png";
import { Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <div className="App">
      <Nav>
        <NavItem>
          <img src={Logo} alt="" />{" "}
        </NavItem>
        <NavItem>
          <NavLink href="https://dad-jokespt.netlify.com/index.html">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://dad-jokespt.netlify.com/about-us.html">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Jokes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addjoke">Submit Joke </NavLink>
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
