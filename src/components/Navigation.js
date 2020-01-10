import React, { useEffect } from "react";
import Logo from "../favicon-32x32.png";
import { Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { checkStatus, logOut } from '../actions/signUpAction';

const Navigation = (props) => {
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();

  console.log('NAVIGATION', loggedIn)

  useEffect(() => {
    dispatch(checkStatus())
  }, [])

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
        {!loggedIn ? (
          <>
            <NavItem>
              <NavLink href="/signup">Sign Up </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login </NavLink>
            </NavItem>
          </>
        ) : (
          <NavItem><NavLink href='/' onClick={()=>dispatch(logOut())}>Log out</NavLink></NavItem>
        )}
        
      </Nav>
      <br />
    </div>
  );
};

export default Navigation;
