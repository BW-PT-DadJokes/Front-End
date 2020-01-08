import React from "react";
import { Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <div className="App">
      <Nav>
        <NavItem>
          <NavLink href="https://dad-jokespt.netlify.com/index.html">
            Dad Jokes
          </NavLink>
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
          <NavLink href="/signup">Sign Up </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addjoke">Add Joke </NavLink>
        </NavItem>
      </Nav>
      <br />
    </div>
  );
};

export default Navigation;
