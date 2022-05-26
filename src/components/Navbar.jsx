import React from "react";
import styled from "styled-components";

export default function Navbar() {
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  return (
    <Nav>
      <div className="brand">
        <h2>Coinbase</h2>
      </div>
      <div className="links">
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <a href={link}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </Nav>
  );
}

const Nav = styled.nav``;
