import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header - Full Width */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            ASTRA
            <span className="logo-badge">Blockchain</span>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#build" onClick={() => setMenuOpen(false)}>Build</a>
            <a href="#ecosystem" onClick={() => setMenuOpen(false)}>Ecosystem</a>
            <a href="#governance" onClick={() => setMenuOpen(false)}>Governance</a>
            <a href="#docs" onClick={() => setMenuOpen(false)}>Docs</a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
          </div>

          <div className="nav-actions">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section - Full Screen */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content fade-in">
              <span className="hero-tagline">Layer 1 Blockchain</span>
              <h1>
                The Next Generation<br />
                Blockchain for Web3
              </h1>
              <p className="hero-description">
                Astra is a high-performance Layer 1 blockchain built for mass adoption. 
                Scalable, secure, and developer-friendly—engineered for the future of decentralized applications.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">
                  🚀 Start Building
                </button>
                <button className="btn btn-outline">
                  📖 Read Documentation
                </button>
              </div>
              
              <div className="hero-stats">
                <div className="stat-preview">
                  <div className="stat-preview-value">&lt; 2s</div>
                  <div className="stat-preview-label">Finality</div>
                </div>
                <div className="stat-preview">
                  <div className="stat-preview-value">100K+</div>
                  <div className="stat-preview-label">TPS</div>
                </div>
                <div className="stat-preview">
                  <div className="stat-preview-value">$0.001</div>
                  <div className="stat-preview-label">Avg Fee</div>
                </div>
                <div className="stat-preview">
                  <div className="stat-preview-value">2,000+</div>
                  <div className="stat-preview-label">Validators</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features full-width">
          <div className="container">
            <div className="section-header fade-in">
              <h2>Built for the Future of Blockchain</h2>
              <p className="section-subtitle">Enterprise-grade infrastructure for decentralized applications</p>
            </div>
            <div className="feature-grid">
              <div className="feature-card fade-in delay-1">
                <div className="feature-icon">⚡</div>
                <h3>High Performance</h3>
                <p>Sub-second finality with over 100,000 transactions per second</p>
              </div>
              <div className="feature-card fade-in delay-2">
                <div className="feature-icon">🔒</div>
                <h3>Battle-Tested Security</h3>
                <p>Formally verified consensus with military-grade encryption</p>
              </div>
              <div className="feature-card fade-in delay-3">
                <div className="feature-icon">🛠️</div>
                <h3>Developer First</h3>
                <p>Comprehensive SDKs, tools, and documentation for developers</p>
              </div>
              <div className="feature-card fade-in delay-1">
                <div className="feature-icon">🌐</div>
                <h3>Fully Interoperable</h3>
                <p>Native cross-chain communication with Ethereum, Solana, and more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Stats */}
        <section className="blockchain-stats full-width">
          <div className="container">
            <div className="section-header fade-in">
              <h2>Performance That Scales</h2>
              <p className="section-subtitle">Production-ready infrastructure trusted by top projects</p>
            </div>
            <div className="stats-grid">
              <div className="stat-item fade-in delay-1">
                <div className="stat-value">&lt; 2s</div>
                <div className="stat-label">Transaction Finality</div>
              </div>
              <div className="stat-item fade-in delay-2">
                <div className="stat-value">&gt; 100K</div>
                <div className="stat-label">Transactions per Second</div>
              </div>
              <div className="stat-item fade-in delay-3">
                <div className="stat-value">2,000+</div>
                <div className="stat-label">Active Validators</div>
              </div>
              <div className="stat-item fade-in delay-1">
                <div className="stat-value">99.99%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Constellation Architecture */}
        <section id="architecture" className="blockchain-section full-width">
          <div className="container">
            <div className="blockchain-grid">
              <div className="blockchain-content fade-in">
                <h2>A Constellation, Not a Chain</h2>
                <p>
                  Unlike traditional blockchains that force everything into a single execution environment, 
                  Astra's modular architecture enables a permissionless, interoperable ecosystem of specialized chains.
                </p>
                <ul className="tech-list">
                  <li>Horizontal scaling through sharding</li>
                  <li>Independent execution environments</li>
                  <li>Seamless cross-chain communication</li>
                  <li>Predictable performance under load</li>
                </ul>
                <button className="btn btn-outline mt-lg">
                  Learn About Architecture →
                </button>
              </div>
              <div className="blockchain-visual fade-in delay-1">
                <div className="blockchain-visual-inner">
                  <span className="pulse">✨</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Builders */}
        <section id="builders" className="blockchain-section full-width" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="blockchain-grid">
              <div className="blockchain-visual fade-in">
                <div className="blockchain-visual-inner">
                  <span className="pulse">🏗️</span>
                </div>
              </div>
              <div className="blockchain-content fade-in delay-1">
                <h2>Built for Serious Builders</h2>
                <p>
                  Astra prioritizes long-term stability and security over short-term gains. 
                  Our developer-centric approach ensures you can build with confidence for years to come.
                </p>
                <div className="tech-list">
                  <li>Type-safe smart contracts</li>
                  <li>Gas-efficient execution</li>
                  <li>Comprehensive testing framework</li>
                  <li>Enterprise-grade tooling</li>
                </div>
                <button className="btn btn-primary mt-lg">
                  📚 Explore Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta full-width">
          <div className="container">
            <div className="cta-content fade-in">
              <h2>Join the Blockchain Revolution</h2>
              <p>
                Astra is governed by its community through transparent, on-chain governance. 
                Help shape the future of decentralized infrastructure.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">
                  🚀 Start Building on Astra
                </button>
                <button className="btn btn-outline">
                  💬 Join Community
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Column 1: ASTRA Blockchain */}
            <div className="footer-column">
              <h4>ASTRA Blockchain</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            
            {/* Column 2: Documentation */}
            <div className="footer-column">
              <h4>Documentation</h4>
              <ul className="footer-links">
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#sdk">SDK & Tools</a></li>
                <li><a href="#api">API Reference</a></li>
                <li><a href="#getting-started">Getting Started</a></li>
              </ul>
            </div>
            
            {/* Column 3: Technology */}
            <div className="footer-column">
              <h4>Technology</h4>
              <ul className="footer-links">
                <li><a href="#whitepaper">Whitepaper</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#audits">Audits</a></li>
              </ul>
            </div>
            
            {/* Column 4: Community */}
            <div className="footer-column">
              <h4>Community</h4>
              <ul className="footer-links">
                <li><a href="#governance">Governance</a></li>
                <li><a href="#grants">Grants Program</a></li>
                <li><a href="#forum">Forum</a></li>
                <li><a href="#social">Social Media</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 ASTRA Blockchain. The next generation of decentralized infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;