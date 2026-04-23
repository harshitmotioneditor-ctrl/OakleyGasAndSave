// Home.jsx — editorial, CSS/SVG-only (no external photos).
// All visuals are inline SVG + CSS gradients, so no CDN reliability risk.

/* ---------- SVG illustrations (inline; amber + muted whites on dark) ---------- */

// Hero bg art — canopy + pumps silhouette, right-aligned behind text
function HeroCanopy() {
  return (
    <svg viewBox="0 0 820 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="canopyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.35"/>
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="canopyL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.9"/>
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      {/* ground line */}
      <line x1="0" y1="480" x2="820" y2="480" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1"/>
      {/* canopy slab */}
      <rect x="60" y="120" width="720" height="14" fill="url(#canopyL)"/>
      <rect x="60" y="134" width="720" height="3" fill="#f59e0b" fillOpacity="0.2"/>
      {/* canopy light spill */}
      <path d="M60 137 L0 440 L820 440 L760 137 Z" fill="url(#canopyG)"/>
      {/* left support column */}
      <rect x="96" y="134" width="6" height="346" fill="#f59e0b" fillOpacity="0.55"/>
      {/* right support column */}
      <rect x="738" y="134" width="6" height="346" fill="#f59e0b" fillOpacity="0.55"/>
      {/* pump 1 */}
      <g transform="translate(210, 310)">
        <rect x="0" y="0" width="54" height="170" rx="6" fill="none" stroke="#f59e0b" strokeOpacity="0.7" strokeWidth="1.5"/>
        <rect x="10" y="18" width="34" height="28" fill="#f59e0b" fillOpacity="0.25"/>
        <line x1="8" y1="58" x2="46" y2="58" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
        <line x1="8" y1="68" x2="46" y2="68" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
        <line x1="8" y1="78" x2="46" y2="78" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
        {/* hose */}
        <path d="M54 120 Q 78 130 76 160" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="2"/>
      </g>
      {/* pump 2 */}
      <g transform="translate(420, 290)">
        <rect x="0" y="0" width="54" height="190" rx="6" fill="none" stroke="#f59e0b" strokeOpacity="0.7" strokeWidth="1.5"/>
        <rect x="10" y="18" width="34" height="28" fill="#f59e0b" fillOpacity="0.3"/>
        <line x1="8" y1="58" x2="46" y2="58" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
        <line x1="8" y1="68" x2="46" y2="68" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
        <path d="M0 140 Q -20 150 -22 180" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="2"/>
      </g>
      {/* pump 3 */}
      <g transform="translate(600, 320)">
        <rect x="0" y="0" width="54" height="160" rx="6" fill="none" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="1.5"/>
        <rect x="10" y="18" width="34" height="28" fill="#f59e0b" fillOpacity="0.2"/>
      </g>
    </svg>
  );
}

// Split — Speed (road stripes in perspective)
function ArtRoad() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="roadSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.35"/>
          <stop offset="0.35" stopColor="#f59e0b" stopOpacity="0.08"/>
          <stop offset="0.65" stopColor="#0a0d14" stopOpacity="0.1"/>
          <stop offset="1" stopColor="#0a0d14" stopOpacity="0.95"/>
        </linearGradient>
        <linearGradient id="roadG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a0d14" stopOpacity="0"/>
          <stop offset="1" stopColor="#0a0d14" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      {/* sky */}
      <rect width="400" height="500" fill="url(#roadSky)"/>
      {/* horizon glow */}
      <ellipse cx="200" cy="240" rx="180" ry="8" fill="#f59e0b" fillOpacity="0.5"/>
      <ellipse cx="200" cy="240" rx="220" ry="20" fill="#f59e0b" fillOpacity="0.15"/>
      {/* road — perspective trapezoid */}
      <path d="M160 240 L240 240 L360 500 L40 500 Z" fill="#0d0f14" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="1"/>
      {/* center dashes */}
      <g fill="#f59e0b">
        <rect x="197" y="250" width="6" height="14" opacity="0.7"/>
        <rect x="196" y="280" width="8" height="20" opacity="0.8"/>
        <rect x="194" y="320" width="12" height="26" opacity="0.85"/>
        <rect x="192" y="360" width="16" height="34" opacity="0.9"/>
        <rect x="189" y="410" width="22" height="44" opacity="0.95"/>
        <rect x="185" y="468" width="30" height="32" opacity="1"/>
      </g>
      {/* edge lines */}
      <line x1="160" y1="240" x2="40" y2="500" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1.5"/>
      <line x1="240" y1="240" x2="360" y2="500" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1.5"/>
      {/* dark vignette foreground */}
      <rect width="400" height="500" fill="url(#roadG)"/>
    </svg>
  );
}

// Split — Store (shelf rhythm)
function ArtShelf() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="shelfBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#161b25"/>
          <stop offset="1" stopColor="#0a0d14"/>
        </linearGradient>
        <linearGradient id="shelfGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.15"/>
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#shelfBg)"/>
      {/* ceiling glow strips */}
      <rect x="20" y="20" width="360" height="4" fill="#f59e0b" fillOpacity="0.9"/>
      <rect x="0" y="24" width="400" height="80" fill="url(#shelfGlow)"/>
      {/* 4 shelves with product silhouettes */}
      {[120, 220, 320, 420].map((y, i) => (
        <g key={i}>
          <rect x="20" y={y} width="360" height="3" fill="#f59e0b" fillOpacity="0.35"/>
          {/* product rectangles */}
          {Array.from({ length: 12 }).map((_, j) => {
            const h = 40 + ((i + j) % 4) * 10;
            const op = 0.15 + ((j % 5) * 0.08);
            const amber = (i + j) % 7 === 0;
            return (
              <rect
                key={j}
                x={24 + j * 30}
                y={y - h - 2}
                width="26"
                height={h}
                rx="2"
                fill={amber ? '#f59e0b' : '#ffffff'}
                fillOpacity={amber ? 0.55 : op}
              />
            );
          })}
        </g>
      ))}
      {/* floor vignette */}
      <rect y="440" width="400" height="60" fill="#0a0d14" fillOpacity="0.7"/>
    </svg>
  );
}

// Feature banner art — speedometer/gauge dial
function ArtGauge() {
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="gaugeG" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.55" stopColor="#f59e0b" stopOpacity="0"/>
          <stop offset="0.7" stopColor="#f59e0b" stopOpacity="0.4"/>
          <stop offset="0.85" stopColor="#f59e0b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="260" fill="url(#gaugeG)"/>
      <circle cx="300" cy="300" r="220" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1"/>
      <circle cx="300" cy="300" r="180" fill="none" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1"/>
      {/* tick marks */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i / 48) * Math.PI * 2 - Math.PI / 2;
        const big = i % 4 === 0;
        const inner = big ? 200 : 210;
        const outer = 220;
        const x1 = 300 + Math.cos(angle) * inner;
        const y1 = 300 + Math.sin(angle) * inner;
        const x2 = 300 + Math.cos(angle) * outer;
        const y2 = 300 + Math.sin(angle) * outer;
        return (
          <line
            key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#f59e0b"
            strokeOpacity={big ? 0.9 : 0.4}
            strokeWidth={big ? 2 : 1}
          />
        );
      })}
      {/* needle pointing to ~10 o'clock (off-center for composition) */}
      <line x1="300" y1="300" x2="160" y2="220" stroke="#f59e0b" strokeWidth="3" strokeOpacity="0.95" strokeLinecap="round"/>
      <circle cx="300" cy="300" r="12" fill="#f59e0b"/>
      <circle cx="300" cy="300" r="6" fill="#0a0d14"/>
    </svg>
  );
}

// Triptych — Coffee cup + steam
function ArtCoffee() {
  return (
    <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g transform="translate(200, 200)">
        {/* steam */}
        <path d="M-30 -30 Q -40 -70 -20 -100 Q 0 -130 -10 -160" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
        <path d="M0 -20 Q 10 -60 -5 -95 Q -20 -130 0 -160" fill="none" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 -30 Q 35 -65 15 -100 Q -5 -140 20 -170" fill="none" stroke="#f59e0b" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round"/>
        {/* cup */}
        <path d="M-55 -20 L-48 80 Q -48 100 -28 100 L28 100 Q 48 100 48 80 L55 -20 Z" fill="none" stroke="#f59e0b" strokeOpacity="0.85" strokeWidth="2.5"/>
        {/* handle */}
        <path d="M55 0 Q 85 0 85 30 Q 85 60 55 60" fill="none" stroke="#f59e0b" strokeOpacity="0.7" strokeWidth="2.5"/>
        {/* rim */}
        <ellipse cx="0" cy="-20" rx="55" ry="8" fill="none" stroke="#f59e0b" strokeOpacity="0.9" strokeWidth="2"/>
        <ellipse cx="0" cy="-20" rx="48" ry="6" fill="#f59e0b" fillOpacity="0.2"/>
        {/* saucer */}
        <ellipse cx="0" cy="110" rx="75" ry="10" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="2"/>
      </g>
    </svg>
  );
}

// Triptych — Bag / tote grid
function ArtBag() {
  return (
    <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g transform="translate(200, 195)" fill="none" stroke="#f59e0b" strokeWidth="2">
        {/* bag body */}
        <path d="M-90 -30 L-90 110 Q -90 130 -70 130 L70 130 Q 90 130 90 110 L90 -30 Z" strokeOpacity="0.85"/>
        {/* handles */}
        <path d="M-50 -30 Q -50 -70 -20 -70 L20 -70 Q 50 -70 50 -30" strokeOpacity="0.85"/>
        {/* items sticking out */}
        {/* bread */}
        <ellipse cx="-45" cy="-40" rx="22" ry="12" strokeOpacity="0.7"/>
        <line x1="-55" y1="-42" x2="-35" y2="-42" strokeOpacity="0.5"/>
        <line x1="-55" y1="-38" x2="-35" y2="-38" strokeOpacity="0.5"/>
        {/* bottle */}
        <rect x="10" y="-80" width="20" height="55" rx="3" strokeOpacity="0.7"/>
        <rect x="15" y="-92" width="10" height="12" strokeOpacity="0.7"/>
        {/* snack box */}
        <rect x="40" y="-45" width="35" height="22" strokeOpacity="0.65"/>
        {/* vertical fold lines on bag */}
        <line x1="-40" y1="-20" x2="-40" y2="120" strokeOpacity="0.25"/>
        <line x1="0" y1="-20" x2="0" y2="120" strokeOpacity="0.25"/>
        <line x1="40" y1="-20" x2="40" y2="120" strokeOpacity="0.25"/>
      </g>
    </svg>
  );
}

// Triptych — Highway/route marker
function ArtHwy() {
  return (
    <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g transform="translate(200, 195)">
        {/* shield outline — classic CA/US route marker */}
        <path d="M0 -110 L75 -90 L80 0 Q 80 60 0 110 Q -80 60 -80 0 L-75 -90 Z"
              fill="none" stroke="#f59e0b" strokeOpacity="0.85" strokeWidth="2.5"/>
        <path d="M0 -100 L68 -82 L72 -5 Q 72 52 0 98 Q -72 52 -72 -5 L-68 -82 Z"
              fill="#f59e0b" fillOpacity="0.12"/>
        {/* "4" — highway number */}
        <text x="0" y="30" textAnchor="middle" fontSize="100" fontWeight="800" fill="#f59e0b" fillOpacity="0.95"
              fontFamily="-apple-system, system-ui, sans-serif" letterSpacing="-4">4</text>
        <text x="0" y="-65" textAnchor="middle" fontSize="14" fontWeight="700" fill="#f59e0b" fillOpacity="0.85"
              fontFamily="-apple-system, system-ui, sans-serif" letterSpacing="3">HWY</text>
      </g>
    </svg>
  );
}

// Final CTA art — broad canopy silhouette centered
function ArtFinalCanopy() {
  return (
    <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* canopy */}
      <rect x="60" y="20" width="780" height="10" fill="#f59e0b" fillOpacity="0.6"/>
      <rect x="60" y="30" width="780" height="3" fill="#f59e0b" fillOpacity="0.3"/>
      {/* columns */}
      <rect x="100" y="33" width="5" height="200" fill="#f59e0b" fillOpacity="0.5"/>
      <rect x="795" y="33" width="5" height="200" fill="#f59e0b" fillOpacity="0.5"/>
      {/* pump cluster */}
      {[280, 420, 560].map((x, i) => (
        <g key={i} transform={`translate(${x}, 120)`}>
          <rect x="0" y="0" width="40" height="110" rx="4" fill="none" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="1.5"/>
          <rect x="7" y="12" width="26" height="20" fill="#f59e0b" fillOpacity="0.3"/>
        </g>
      ))}
      {/* ground */}
      <line x1="0" y1="233" x2="900" y2="233" stroke="#f59e0b" strokeOpacity="0.3"/>
    </svg>
  );
}


/* ---------- PAGE ---------- */
function HomePage({ onNavigate }) {
  const offerings = [
    { num: '01', title: 'Fuel', desc: 'Regular, Plus, Premium, Diesel — top-tier detergents, every grade.' },
    { num: '02', title: 'Coffee Bar',   desc: 'Brewed fresh through the day. Members save on every cup.' },
    { num: '03', title: 'Grab & Go',    desc: 'Hot food, cold drinks, and the snack aisle you reach for.' },
    { num: '04', title: 'Essentials',   desc: 'Motor oil, wiper fluid, phone chargers, ice — the short list.' },
    { num: '05', title: 'Air · Water · ATM',  desc: 'Free at every visit. Cash inside, no detour required.' },
  ];

  const quotes = [
    { stars: 5, text: 'The only station I stop at anymore. Clean, quick, coffee is real.', who: 'Maria S. · Oakley' },
    { stars: 5, text: 'Prices are straight, the store is stocked, and nobody wastes my time.', who: 'James R. · Brentwood' },
    { stars: 5, text: 'Rewards actually pay back. I see it on my statement every month.', who: 'Priya K. · Oakley' },
  ];

  const tickerItems = [
    'Fuel', 'Coffee', 'Snacks', 'Essentials', 'ATM', 'Propane', 'Air & Water',
    'Hot Food', 'Cold Drinks', 'Lottery', 'Rewards',
    'Fuel', 'Coffee', 'Snacks', 'Essentials', 'ATM', 'Propane', 'Air & Water',
    'Hot Food', 'Cold Drinks', 'Lottery', 'Rewards',
  ];

  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="ed-hero">
        <div className="ed-hero__bg" />
        <div className="ed-hero__scrim" />
        <div className="ed-hero__art" style={{ position: 'absolute', right: '-4%', bottom: '8%', width: '55%', maxWidth: 820, zIndex: 0, opacity: 0.25, pointerEvents: 'none' }}>
          <HeroCanopy />
        </div>
        {/* 3D floating stage */}
        <div className="hero-stage" aria-hidden="true">
          <div className="hero-stage__pump"><I3Pump size={260} /></div>
          <div className="hero-stage__coffee"><I3Coffee size={130} /></div>
          <div className="hero-stage__can"><I3Can size={110} /></div>
        </div>
        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          <span className="ed-hero__kicker reveal">Oakley, California · Highway 4</span>
          <h1 className="reveal">
            Fuel up.<br/>
            Stock up.<br/>
            <span className="highlight">Drive off</span>.
          </h1>
          <p className="ed-hero__sub reveal">
            A cleaner, quicker, better-run stop — for the people who drive Oakley every day.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
            <Button onClick={() => onNavigate('contact')}>Plan Your Stop →</Button>
            <Button variant="secondary" onClick={() => onNavigate('fuel')}>Today's Prices</Button>
          </div>
          <div className="ed-hero__meta reveal">
            <span><strong>5 AM – 11 PM</strong> · Every Day</span>
            <span><strong>4.8★</strong> · 600+ Reviews</span>
            <span><strong>Hwy 4</strong> · Main & Laurel</span>
          </div>
        </div>
      </section>

      {/* ==================== TICKER ==================== */}
      <section className="ed-ticker" aria-hidden="true">
        <div className="ed-ticker__track">
          {tickerItems.map((t, i) => <span key={i} className="ed-ticker__item">{t}</span>)}
        </div>
      </section>

      {/* ==================== OFFERINGS — BIG INDEX ==================== */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">What's Here</span>
              <h2 className="ed-display">Five things. <em>Under one canopy.</em></h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">
                Less than a two-minute stop, more than a fill-up. Everything a driver needs, laid out so you don't have to hunt for it.
              </p>
            </div>
          </div>
          <div className="ed-index" data-stagger>
            {offerings.map((o, i) => (
              <a key={i} href="#" className="ed-index__row reveal"
                 onClick={(e) => { e.preventDefault(); onNavigate(i === 0 ? 'fuel' : 'store'); }}>
                <span className="ed-index__num">{o.num}</span>
                <span className="ed-index__title">{o.title}</span>
                <span className="ed-index__desc">{o.desc}</span>
                <span className="ed-index__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPLIT — SPEED ==================== */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="ed-split">
            <div className="ed-split__art reveal reveal--left">
              <span className="ed-split__tag">Pulling In</span>
              <ArtRoad />
              <div style={{ position:'absolute', right:24, bottom:24, zIndex:3 }} className="icon3d icon3d--float"><I3Road size={90}/></div>
            </div>
            <div className="reveal reveal--right">
              <span className="ed-eyebrow">Speed</span>
              <h2 className="ed-display">A stop measured in <em>minutes</em>, not errands.</h2>
              <p className="ed-lead">
                Wide bays, clear signage, a checkout that doesn't make you wait. Pull in, pump, pick up coffee, pull out — back on Highway 4 before the track changes.
              </p>
              <div className="ed-stat-row">
                <div><div className="ed-stat__num">2 min</div><div className="ed-stat__label">Average stop</div></div>
                <div><div className="ed-stat__num">8</div><div className="ed-stat__label">Pumps, always open</div></div>
                <div><div className="ed-stat__num">0</div><div className="ed-stat__label">Lines at rush hour</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPLIT — STORE ==================== */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="ed-split ed-split--flip">
            <div className="ed-split__art reveal reveal--right">
              <span className="ed-split__tag">Inside</span>
              <ArtShelf />
              <div style={{ position:'absolute', left:24, bottom:24, zIndex:3 }} className="icon3d icon3d--float"><I3Bag size={100}/></div>
            </div>
            <div className="reveal reveal--left">
              <span className="ed-eyebrow">The Store</span>
              <h2 className="ed-display">Stocked, bright, and <em>quietly well-run</em>.</h2>
              <p className="ed-lead">
                A convenience store that respects your time. Shelves reset twice a day, restrooms checked every hour, aisles wide enough to walk through without a sidestep.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
                <Button onClick={() => onNavigate('store')}>See What's Inside</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED DEAL BANNER ==================== */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="ed-feature reveal reveal--scale">
            <div className="ed-feature__art" style={{ position: 'absolute', right: '-8%', top: '50%', transform: 'translateY(-50%)', width: '60%', maxWidth: 640, opacity: 0.25, pointerEvents: 'none', zIndex: 1 }}>
              <ArtGauge />
            </div>
            <div className="ed-feature__inner" style={{ position: 'relative', zIndex: 2 }}>
              <span className="ed-eyebrow">This Week</span>
              <div className="ed-feature__price">10¢ <span style={{ fontSize: '0.4em', color: 'var(--text-secondary)', fontWeight: 400 }}>/ gal</span></div>
              <div className="ed-feature__title">Off every grade. Posted at the pump.</div>
              <p className="ed-feature__sub">No codes, no couponing, no small print. Rewards members save another 3¢ on top.</p>
              <div>
                <Button onClick={() => onNavigate('deals')}>View This Week's Offers →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LOCAL TRIPTYCH ==================== */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">Right Where You Are</span>
              <h2 className="ed-display">Built for the <em>Oakley drive</em>.</h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">A local stop for people who live, work, and move through the East Bay every day.</p>
            </div>
          </div>
          <div className="ed-trip" data-stagger>
            <div className="ed-trip__card ed-trip__card--commuter reveal">
              <div className="ed-trip__art"><ArtCoffee /></div>
              <div style={{ position:'absolute', top:24, right:24, zIndex:3 }} className="icon3d icon3d--float"><I3Coffee size={100}/></div>
              <div className="ed-trip__content">
                <span className="ed-trip__tag">For Commuters</span>
                <h3 className="ed-trip__title">The 6 AM stop.<br/>Coffee ready before you park.</h3>
              </div>
            </div>
            <div className="ed-trip__card ed-trip__card--family reveal">
              <div className="ed-trip__art"><ArtBag /></div>
              <div style={{ position:'absolute', top:24, right:24, zIndex:3 }} className="icon3d icon3d--float"><I3Bag size={100}/></div>
              <div className="ed-trip__content">
                <span className="ed-trip__tag">For Families</span>
                <h3 className="ed-trip__title">Everyone's favorite.<br/>Clean, quick, stocked.</h3>
              </div>
            </div>
            <div className="ed-trip__card ed-trip__card--passing reveal">
              <div className="ed-trip__art"><ArtHwy /></div>
              <div style={{ position:'absolute', top:24, right:24, zIndex:3 }} className="icon3d icon3d--float"><I3Road size={100}/></div>
              <div className="ed-trip__content">
                <span className="ed-trip__tag">For Passing Through</span>
                <h3 className="ed-trip__title">One turn off Hwy 4.<br/>Back on it in three.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST STRIP ==================== */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="ed-trust reveal" data-stagger>
            <div className="ed-trust__item">
              <div className="ed-trust__num">4.8★</div>
              <div className="ed-trust__label">Google Rating</div>
            </div>
            <div className="ed-trust__item">
              <div className="ed-trust__num">7 Days</div>
              <div className="ed-trust__label">Open Every Day</div>
            </div>
            <div className="ed-trust__item">
              <div className="ed-trust__num">2 min</div>
              <div className="ed-trust__label">Average Stop</div>
            </div>
            <div className="ed-trust__item">
              <div className="ed-trust__num">100%</div>
              <div className="ed-trust__label">Locally Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUOTES ==================== */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">In Their Words</span>
              <h2 className="ed-display">Regulars know.<br/><em>New visitors find out fast.</em></h2>
            </div>
          </div>
          <div className="ed-quote" data-stagger>
            {quotes.map((q, i) => (
              <div key={i} className="ed-quote__item reveal">
                <div className="ed-quote__stars">{'★'.repeat(q.stars)}</div>
                <div className="ed-quote__text">"{q.text}"</div>
                <div className="ed-quote__author">{q.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-final reveal reveal--scale">
            <div className="ed-final__art"><ArtFinalCanopy /></div>
            <span className="ed-eyebrow" style={{ justifyContent: 'center' }}>Your Next Stop</span>
            <h2>Already on <em>the way home</em>.</h2>
            <p>Open 5 AM to 11 PM, every day of the year. Highway 4 at Main Street.</p>
            <div className="ed-final__ctas">
              <Button onClick={() => onNavigate('contact')}>Open in Maps</Button>
              <Button variant="secondary" onClick={() => {}}>Call (925) 000-0000</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.HomePage = HomePage;
