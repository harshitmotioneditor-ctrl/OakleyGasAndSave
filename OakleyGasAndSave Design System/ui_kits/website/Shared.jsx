// Shared small components used across pages
const { useState: useState2, useEffect: useEffect2 } = React;

function StatusPill() {
  const [state, setState] = useState2({ open: true, label: 'Open Now · Until 11:00 PM' });
  useEffect2(() => {
    const update = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();
      const open = mins >= 300 && mins < 1380;
      const until = 1380 - mins;
      setState({
        open,
        label: open
          ? (until <= 60 ? `Open · Closes in ${until} min` : 'Open Now · Until 11:00 PM')
          : 'Closed · Opens at 5:00 AM'
      });
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={`status-bar ${state.open ? 'status-bar--open' : 'status-bar--closed'}`}>
      <span className="status-dot"></span> {state.label}
    </div>
  );
}

function Section({ children, id, className = '' }) {
  return <section className={`section ${className}`} id={id}>{children}</section>;
}

function SectionHeader({ eyebrow, title, highlight, subtitle, centered }) {
  let rendered = title;
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight);
    rendered = <>{before}<span className="highlight">{highlight}</span>{after}</>;
  }
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`} style={centered ? { textAlign: 'center', maxWidth: 620, margin: '0 auto var(--space-2xl)' } : { marginBottom: 'var(--space-2xl)' }}>
      {eyebrow && <span className="section-label">{eyebrow}</span>}
      <h2 className="section-title">{rendered}</h2>
      {subtitle && <p className="section-subtitle" style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : null}>{subtitle}</p>}
    </div>
  );
}

function GlassCard({ children, className = '', style }) {
  return <div className={`glass-card ${className}`} style={style}>{children}</div>;
}

function Button({ variant = 'primary', children, onClick, size }) {
  const cls = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''}`;
  return <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} className={cls}>{children}</a>;
}

function IconTile({ emoji }) {
  return <div className="service-card-icon">{emoji}</div>;
}

function ServiceCard({ emoji, title, desc }) {
  return (
    <div className="service-card glass-card">
      <IconTile emoji={emoji} />
      <h3 className="service-card-title" style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-xs)' }}>{title}</h3>
      <p className="service-card-desc" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{desc}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" onClick={(e) => e.preventDefault()}>
              <span className="logo-accent">O</span>akleyGasAndSave
            </a>
            <p>Your neighborhood gas station and convenience store in Oakley, CA. Quality fuel, everyday essentials, and friendly service right off Highway 4.</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Fuel & Services</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Store</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Deals & Rewards</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Visit Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Fuel Options</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Convenience Store</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Deals & Promotions</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact Info</h5>
            <address className="footer-contact" style={{ fontStyle: 'normal' }}>
              <p>123 Main Street<br/>Oakley, CA 94561</p>
              <p><a href="#" onClick={(e) => e.preventDefault()}>(925) 000-0000</a></p>
              <p>Open Daily: 5 AM – 11 PM</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 OakleyGasAndSave. All rights reserved.</p>
          <p>Oakley, CA · Near Highway 4</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { StatusPill, Section, SectionHeader, GlassCard, Button, IconTile, ServiceCard, Footer });
