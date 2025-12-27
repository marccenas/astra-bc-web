import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">ASTRA</div>
      <nav>
        <a href="#">Network</a>
        <a href="#">Build</a>
        <a href="#">Ecosystem</a>
        <a href="#">Governance</a>
        <a href="#">Docs</a>
      </nav>
      <div>
        <button>Login</button>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
