import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="logo">ASTRA Network</div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={menuOpen ? 'show' : ''}>
          <a href="#build" onClick={() => setMenuOpen(false)}>Build</a>
          <a href="#encryption" onClick={() => setMenuOpen(false)}>Encryption</a>
          <a href="#governance" onClick={() => setMenuOpen(false)}>Governance</a>
          <a href="#data" onClick={() => setMenuOpen(false)}>Data</a>
          <button>Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>A Constellation, Not a Single Chain</h1>
        <p>High throughput, predictable performance even under global demand.</p>
        <p>Built for Builders Who Think Long-Term</p>
        <div className="buttons">
          <button>Get Started</button>
          <button>Transaction Finally</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div>
          <h2>100k+</h2>
          <p>Throughout at Scale</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Validator Participation</p>
        </div>
        <div>
          <h2>99.9%</h2>
          <p>Network Update</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section" style={{ backgroundColor: '#111229' }}>
        <h2>Build</h2>
        <p>Extra protection clarity over expediency designed for developers and projects to build securely.</p>
      </section>

      <section className="section">
        <h2>Encryption</h2>
        <p>State-of-the-art encryption for maximum security and privacy.</p>
      </section>

      <section className="section" style={{ backgroundColor: '#111229' }}>
        <h2>Governance</h2>
        <p>Decentralized governance model ensuring community-driven development.</p>
      </section>

      <section className="section">
        <h2>Data</h2>
        <p>Secure and scalable data solutions for the future of web3.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 ASTRA Network. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;