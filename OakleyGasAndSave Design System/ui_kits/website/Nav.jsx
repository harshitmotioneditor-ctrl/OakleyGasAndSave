// Nav.jsx — fixed-top nav with scroll glassification + mobile menu
const { useState, useEffect } = React;

function Nav({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'fuel', label: 'Fuel' },
    { id: 'store', label: 'Store' },
    { id: 'deals', label: 'Deals & Rewards' },
    { id: 'contact', label: 'Visit' },
  ];

  const go = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(id);
  };

  const LogoIcon = () => (
    <svg className="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  );

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation">
        <div className="container nav-inner">
          <a href="#" onClick={go('home')} className="nav-logo">
            <LogoIcon />
            <span className="logo-text">
              <span className="logo-accent">O</span>akleyGas<span className="logo-ampersand">&amp;</span>Save
            </span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} href="#" onClick={go(l.id)} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a href="#" onClick={(e) => e.preventDefault()} className="nav-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="nav-phone-text">(925) 000-0000</span>
            </a>
            <a href="#" onClick={go('contact')} className="btn btn-primary btn-nav">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Directions
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(v => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-brand">
          <LogoIcon />
          <span style={{ fontSize: 'var(--text-lg)', fontWeight: 800 }}>
            <span style={{ color: 'var(--accent)' }}>O</span>akleyGas&amp;Save
          </span>
        </div>
        {links.map(l => (
          <a key={l.id} href="#" onClick={go(l.id)} className={active === l.id ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

window.Nav = Nav;
