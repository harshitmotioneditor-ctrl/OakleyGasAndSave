// Pages.jsx — Fuel, Store, Deals, Contact.
// Elevated pass: 3D icon hero, dimensional cards, scroll reveals, map, tier badges.

// ============================================================================
// FUEL PAGE — price board + 3D service cards + quality assurance
// ============================================================================
function FuelPage() {
  const fuels = [
    { type: 'Regular', octane: '87', price: '4.39', note: 'Everyday driving',          premium: false, delta: '−0.08' },
    { type: 'Plus',    octane: '89', price: '4.59', note: 'Smoother pickup',           premium: false, delta: '−0.06' },
    { type: 'Premium', octane: '91', price: '4.79', note: 'High-performance engines',  premium: true,  delta: '−0.04' },
    { type: 'Diesel',  octane: '—',  price: '4.99', note: 'Trucks & fleet-ready',      premium: false, delta: '−0.10' },
  ];

  const extras = [
    { icon: <I3Air size={84} />,     title: 'Air & Water',     desc: 'Free at every visit. No apps, no quarters, no waiting.', meta: 'Always available · No purchase required' },
    { icon: <I3Badge size={84} tier="bronze" />, title: 'Propane Exchange', desc: 'Tanks for the grill, heater, or the weekend trip — in and out.', meta: 'Standard 20-lb tanks · Swap or refill' },
    { icon: <I3Pump size={84} />,    title: 'Quick Car Wash',  desc: 'Drive out cleaner than you arrived. Member rates available.', meta: '3 min cycle · 24/7 access' },
    { icon: <I3Card size={84} />,    title: 'On-Site ATM',     desc: 'Low-fee cash inside the store. Open as long as we are.', meta: '$2.50 flat · All major networks' },
  ];

  const quality = [
    { k: 'Top-Tier Detergents', v: 'Every grade includes cleaning additives that keep injectors and valves running cleaner.' },
    { k: 'Tanks Tested Daily',  v: 'Quality checks logged every morning. We know what\'s in the ground before you pump it.' },
    { k: 'Calibrated Pumps',    v: 'Inspected to state standards. You pay for exactly what you pump — to the gallon.' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg"/>
        <div className="container">
          <div className="page-hero__inner">
            <div className="reveal reveal--left">
              <span className="page-hero__kicker">Fuel & Services</span>
              <h1>Clean fuel.<br/><em>Honest prices.</em></h1>
              <p className="lead">
                Regular, Plus, Premium, and Diesel — top-tier detergents in every grade, priced to match the corner. Rewards members save another 3¢ on every gallon.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
                <Button>Open in Maps</Button>
                <Button variant="secondary">Join Rewards</Button>
              </div>
            </div>
            <div className="page-hero__icon reveal reveal--right">
              <I3Pump size={280} />
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S PRICES — ticker board */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">At The Pump Right Now</span>
              <h2 className="ed-display">Today's <em>prices</em>.</h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">Updated every morning. What's posted at the street is exactly what you pay at the pump — no surprises.</p>
            </div>
          </div>
          <div className="price-board" data-stagger>
            {fuels.map((f, i) => (
              <div key={i} className={`price-board__tile reveal ${f.premium ? 'price-board__tile--premium' : ''}`}>
                <div className="price-board__grade">{f.type} · {f.octane}</div>
                <div className="price-board__price">${f.price}</div>
                <div className="price-board__sub">
                  per gallon
                  <span className="price-board__delta">▼ {f.delta}</span>
                </div>
                <div style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{f.note}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-xl)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            Rewards members save an additional 3¢ / gal on every grade — stacking with the posted price
          </p>
        </div>
      </section>

      {/* BEYOND THE PUMP */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">Beyond The Pump</span>
              <h2 className="ed-display">Everything a driver needs, <em>on one lot</em>.</h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">The services that turn a fill-up into a finished errand. Nothing extra to pay for, nowhere else to drive.</p>
            </div>
          </div>
          <div className="svc-grid" data-stagger>
            {extras.map((e, i) => (
              <div key={i} className="svc-card reveal">
                <div className="svc-card__icon icon3d icon3d--float">{e.icon}</div>
                <div className="svc-card__title">{e.title}</div>
                <div className="svc-card__desc">{e.desc}</div>
                <div className="svc-card__meta">{e.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="ed-split">
            <div className="ed-split__art reveal reveal--left">
              <span className="ed-split__tag">Quality Promise</span>
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                <I3Shield size={340} />
              </div>
            </div>
            <div className="reveal reveal--right">
              <span className="ed-eyebrow">What's In The Tank</span>
              <h2 className="ed-display">Quality you can't see — <em>but your engine can</em>.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
                {quality.map((q, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 'var(--space-md)', paddingBottom: 'var(--space-lg)', borderBottom: i < quality.length - 1 ? '1px solid var(--border-glass)' : 'none' }}>
                    <div style={{ fontFamily: "'SF Mono', monospace", fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.1em', paddingTop: 4 }}>0{i+1}</div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 4 }}>{q.k}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>{q.v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-final reveal">
            <span className="ed-eyebrow" style={{ justifyContent: 'center' }}>Fuel Smarter</span>
            <h2>Save every <em>gallon</em>.</h2>
            <p>Join Rewards and pay less at the pump from your very next fill-up. Sign up in 30 seconds at the counter.</p>
            <div className="ed-final__ctas">
              <Button>Join Rewards</Button>
              <Button variant="secondary">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// ============================================================================
// STORE PAGE — 3D product merchandising
// ============================================================================
function StorePage() {
  const products = [
    { icon: <I3Coffee size={130}/>, tag: 'Hot',    name: 'House Roast',      desc: 'Medium body, smooth finish',   price: '$2.49' },
    { icon: <I3Can size={130}/>,    tag: 'Cold',   name: 'Energy Pack',      desc: 'Mix & match the cold case',    price: '$3.99', teal: true },
    { icon: <I3Snack size={130}/>,  tag: 'Local',  name: 'Classic Chips',    desc: 'Original, salt & vinegar, BBQ',price: '$2.29' },
    { icon: <I3Bag size={130}/>,    tag: 'Meal',   name: 'Road Trip Bundle', desc: 'Drink + snack + sandwich',      price: '$7.99' },
    { icon: <I3Coffee size={130}/>, tag: 'Fresh',  name: 'Dark Roast',       desc: 'Bold, full-bodied',             price: '$2.49' },
    { icon: <I3Can size={130}/>,    tag: 'Cold',   name: 'Soda — Any Size',  desc: 'Pulled fresh, kept cold',       price: '$1.49', teal: true },
    { icon: <I3Snack size={130}/>,  tag: 'New',    name: 'Protein Jerky',    desc: 'Real beef, no fillers',         price: '$5.99' },
    { icon: <I3Bag size={130}/>,    tag: 'Pantry', name: 'Milk · Bread',     desc: 'The essentials you forgot',     price: 'from $2' },
  ];

  const cats = [
    { icon: <I3Coffee size={72}/>,  title: 'Coffee Bar',       desc: 'Fresh-brewed regular, dark roast, and decaf all day. Cream, syrups, the works.' },
    { icon: <I3Can size={72}/>,     title: 'Cold Beverages',   desc: 'Full cold case. Sodas, water, juice, energy, kombucha, sports drinks.' },
    { icon: <I3Snack size={72}/>,   title: 'Hot Food',         desc: 'Hot dogs, taquitos, breakfast sandwiches. Made fresh, held hot.' },
    { icon: <I3Bag size={72}/>,     title: 'Snacks & Candy',   desc: 'Chips, jerky, chocolate, nuts, classic road-trip staples.' },
    { icon: <I3Air size={72}/>,     title: 'Car Essentials',   desc: 'Motor oil, wiper fluid, coolant, washer fluid, quick-fix basics.' },
    { icon: <I3Card size={72}/>,    title: 'Lottery & ATM',    desc: 'Scratchers, tickets, and a 24/7 ATM with clear, honest fees.' },
  ];

  const promises = [
    { num: '01', k: 'Stocked', v: 'Shelves reset twice a day. If it\'s out, something new is already on the way.' },
    { num: '02', k: 'Clean',   v: 'Restrooms checked every hour. Floors mopped, counters wiped, lights up.' },
    { num: '03', k: 'Quick',   v: 'Wide aisles, clear signage, and a checkout that doesn\'t make you wait.' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg"/>
        <div className="container">
          <div className="page-hero__inner">
            <div className="reveal reveal--left">
              <span className="page-hero__kicker">Convenience Store</span>
              <h1>Stocked, bright, <em>built for speed</em>.</h1>
              <p className="lead">
                A real convenience store — not a tired afterthought. Fresh coffee, hot food, and the essentials you actually reach for, all laid out so you're in and out in under five.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
                <Button>Get Directions</Button>
                <Button variant="secondary">See Deals</Button>
              </div>
            </div>
            <div className="page-hero__icon reveal reveal--right" style={{ position: 'relative', minHeight: 320 }}>
              <div style={{ position: 'absolute', top: '10%', left: '10%', transform: 'rotate(-6deg)' }}>
                <I3Coffee size={180} />
              </div>
              <div style={{ position: 'absolute', top: '30%', right: 0, transform: 'rotate(8deg)' }}>
                <I3Can size={140} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: '25%', transform: 'rotate(4deg)' }}>
                <I3Snack size={150} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">What We Stock</span>
              <h2 className="ed-display">The <em>short list</em> of things you came in for.</h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">A curated store, not an endless one. Every item earns its shelf space, and the shelves never look tired.</p>
            </div>
          </div>
          <div className="prod-grid" data-stagger>
            {products.map((p, i) => (
              <div key={i} className="prod-card reveal">
                {p.tag && <span className={`prod-card__tag ${p.teal ? 'prod-card__tag--teal' : ''}`}>{p.tag}</span>}
                <div className="prod-card__stage">
                  <div className="icon3d icon3d--float">{p.icon}</div>
                </div>
                <div className="prod-card__body">
                  <div className="prod-card__name">{p.name}</div>
                  <div className="prod-card__desc">{p.desc}</div>
                  <div className="prod-card__price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">Aisles Worth The Walk</span>
              <h2 className="ed-display">Six categories. <em>Zero hunting.</em></h2>
            </div>
          </div>
          <div className="svc-grid" data-stagger>
            {cats.map((c, i) => (
              <div key={i} className="svc-card reveal">
                <div className="svc-card__icon icon3d icon3d--float">{c.icon}</div>
                <div className="svc-card__title">{c.title}</div>
                <div className="svc-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="reveal">
            <span className="ed-eyebrow">The In-Store Standard</span>
            <h2 className="ed-display">Three promises, <em>every visit</em>.</h2>
          </div>
          <div style={{ marginTop: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }} data-stagger>
            {promises.map((p, i) => (
              <div key={i} className="dim-card reveal">
                <div style={{ fontFamily: "'SF Mono', monospace", fontSize: 'var(--text-xs)', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: 'var(--space-md)' }}>— {p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'var(--space-sm)' }}>{p.k}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-final reveal">
            <span className="ed-eyebrow" style={{ justifyContent: 'center' }}>Run Out Of Something?</span>
            <h2>We've <em>got it</em>.</h2>
            <p>Milk, snacks, chargers, motor oil, diapers — the short list of things you forgot is a short walk from the pump.</p>
            <div className="ed-final__ctas">
              <Button>Get Directions</Button>
              <Button variant="secondary">Today's Deals</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// ============================================================================
// DEALS PAGE — 3D tier badges + dimensional promo cards
// ============================================================================
function DealsPage() {
  const deals = [
    { icon: <I3Pump size={110}/>,   badge: 'This Week',   value: '10¢',    unit: 'off every gallon',  title: 'Weekly Fuel Discount',   desc: 'Posted price at the pump — no codes, no couponing, no small print.', terms: 'Valid Mon–Sun. Members save an extra 3¢.' },
    { icon: <I3Coffee size={110}/>, badge: 'Mornings',    value: '$2.99',  unit: 'coffee + pastry',   title: 'The Commuter Combo',     desc: 'Fresh-brewed coffee and a warm pastry. The fastest good breakfast in Oakley.', terms: 'Every day, 5 AM – 11 AM.' },
    { icon: <I3Can size={110}/>,    badge: 'Bundle',      value: '2+1',    unit: 'energy drinks',     title: 'Buy 2, Get 1 Free',      desc: 'Mix and match across select brands. Cold shelf, any flavor.', terms: 'Participating brands. While supplies last.' },
    { icon: <I3Snack size={110}/>,  badge: 'Summer',      value: '$1.49',  unit: 'any fountain',      title: 'Any-Size Refill',        desc: 'Every fountain drink, any size, one price. Pulled fresh, kept cold.', terms: 'Limited run — rolls out monthly.' },
    { icon: <I3Bag size={110}/>,    badge: 'Members',     value: '2×',     unit: 'points tuesdays',   title: 'Double-Up Tuesdays',     desc: 'Every in-store dollar earns twice the points. Stack them toward free fuel.', terms: 'Rewards members. Every Tuesday.' },
    { icon: <I3Badge size={110} tier="gold"/>, badge: 'Birthday', value: 'Free', unit: 'medium coffee', title: 'On The House', desc: 'A free medium coffee during your birthday month. Our thanks for driving with us.', terms: 'Members only. One redemption per year.' },
  ];

  const tiers = [
    {
      tier: 'bronze',
      name: 'Starter',
      thresh: 'Free to join',
      featured: false,
      perks: ['Every purchase earns points', 'Member-only weekly offers', 'Birthday bonus reward'],
    },
    {
      tier: 'silver',
      name: 'Regular',
      thresh: '500 pts',
      featured: true,
      perks: ['5¢ off every gallon', 'Bonus-point days on Tuesdays', 'Free drink with any fuel purchase, weekly', 'Early access to new offers'],
    },
    {
      tier: 'gold',
      name: 'Insider',
      thresh: '1,500 pts',
      featured: false,
      perks: ['10¢ off every gallon', 'Free brewed coffee — weekly', 'Skip-the-line priority pump lane', 'Exclusive Insider-only deals'],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg page-hero__bg--teal"/>
        <div className="container">
          <div className="page-hero__inner">
            <div className="reveal reveal--left">
              <span className="page-hero__kicker">Deals & Rewards</span>
              <h1>Real savings.<br/><em>Every stop.</em></h1>
              <p className="lead">
                Fuel discounts, daily combos, and a rewards program that actually pays back. Refreshed weekly — no gimmicks, no fine print, no hoops.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
                <Button>Join Rewards — Free</Button>
                <Button variant="secondary">View All Offers</Button>
              </div>
            </div>
            <div className="page-hero__icon reveal reveal--right">
              <I3Badge size={280} tier="gold"/>
            </div>
          </div>
        </div>
      </section>

      {/* RUNNING NOW — promo deal cards */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">Running Now</span>
              <h2 className="ed-display">This week's <em>offers</em>.</h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">Grab them in-store or at the pump — nothing to print, nothing to screenshot. Just show up.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }} data-stagger>
            {deals.map((d, i) => (
              <div key={i} className="promo-deal reveal">
                <div>
                  <div className="promo-deal__eyebrow">{d.badge}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.03em' }}>{d.value}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700 }}>{d.unit}</div>
                  </div>
                  <div className="promo-deal__title">{d.title}</div>
                  <p className="promo-deal__desc">{d.desc}</p>
                  <div className="promo-deal__fine">{d.terms}</div>
                </div>
                <div className="promo-deal__icon icon3d icon3d--float">
                  {d.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REWARDS TIERS */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">How Rewards Work</span>
              <h2 className="ed-display">Three tiers. One card. <em>No fine print.</em></h2>
            </div>
            <div className="ed-head__right">
              <p className="ed-lead">Every dollar you spend earns points. Every stack of points unlocks a bigger discount at the pump. That's the whole program.</p>
            </div>
          </div>
          <div className="tier-grid" data-stagger>
            {tiers.map((t, i) => (
              <div key={i}
                   className={`tier-card reveal ${t.featured ? 'tier-card--featured' : ''}`}
                   style={{
                     '--tier-glow': t.tier === 'gold'   ? 'rgba(245,158,11,0.15)'
                                  : t.tier === 'silver' ? 'rgba(226,232,240,0.1)'
                                                        : 'rgba(217,119,6,0.12)',
                   }}>
                <div className="tier-card__badge icon3d icon3d--float">
                  <I3Badge size={110} tier={t.tier}/>
                </div>
                <div className="tier-card__name">{t.name}</div>
                <div className="tier-card__thresh">{t.thresh}</div>
                <ul className="tier-card__perks">
                  {t.perks.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                {t.featured && <div style={{ position: 'absolute', top: 'var(--space-md)', left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', borderRadius: 999, background: 'var(--accent)', color: '#0d0f14', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800 }}>Most Popular</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-final reveal">
            <span className="ed-eyebrow" style={{ justifyContent: 'center' }}>Join In 30 Seconds</span>
            <h2>Save from <em>the next fill-up</em>.</h2>
            <p>Sign up with your phone number at the counter. No app required, no spam — just savings that show up at the pump.</p>
            <div className="ed-final__ctas">
              <Button>Join Rewards — It's Free</Button>
              <Button variant="secondary">See All Perks</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// ============================================================================
// CONTACT PAGE — map with pulsing pin + hours table + contact form
// ============================================================================
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };

  // Simulated day (matches visit "is today" highlight)
  const todayIdx = new Date().getDay(); // 0=Sun
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const hours = '5:00 AM – 11:00 PM';

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg"/>
        <div className="container">
          <div className="page-hero__inner">
            <div className="reveal reveal--left">
              <span className="page-hero__kicker">Visit Us</span>
              <h1>Just off <em>Highway 4</em>.<br/>Already on your way.</h1>
              <p className="lead">
                123 Main Street, Oakley, CA 94561. Open 5 AM – 11 PM, every day of the week. One turn, one stop, done.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
                <Button>Open in Maps</Button>
                <Button variant="secondary">Call (925) 000-0000</Button>
              </div>
            </div>
            <div className="page-hero__icon reveal reveal--right">
              <I3Pin size={260} />
            </div>
          </div>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="ed-section">
        <div className="container">
          <div className="ed-head reveal">
            <div>
              <span className="ed-eyebrow">Find Us</span>
              <h2 className="ed-display">One turn off <em>Hwy 4</em>.</h2>
            </div>
          </div>
          <div className="contact-grid" data-stagger>
            {/* MAP */}
            <div className="contact-map reveal reveal--left">
              <div className="contact-map__grid"/>
              {/* Decorative road pattern */}
              <svg className="contact-map__roads" viewBox="0 0 400 400" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <path d="M 0 200 Q 200 180 400 200" className="highway"/>
                <path d="M 200 0 L 200 400"/>
                <path d="M 0 280 L 400 260"/>
                <path d="M 100 0 L 120 400"/>
                <path d="M 300 0 L 280 400"/>
              </svg>
              <svg className="contact-map__labels" viewBox="0 0 400 400" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <text x="20" y="190">HIGHWAY 4</text>
                <text x="210" y="30">MAIN ST</text>
                <text x="20" y="275">LAUREL RD</text>
              </svg>
              <div className="contact-map__pulse"/>
              <div className="contact-map__pin">
                <I3Pin size={80} />
              </div>
              {/* North indicator */}
              <div style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: '50%', background: 'rgba(13,15,20,0.7)', border: '1px solid var(--border-glass)', display: 'grid', placeItems: 'center', color: 'var(--accent)', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em' }}>N</div>
              {/* Scale bar */}
              <div style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>
                <div style={{ width: 60, height: 3, background: 'rgba(255,255,255,0.3)', marginBottom: 4 }}/>
                1/4 mile
              </div>
            </div>

            {/* INFO BLOCKS */}
            <div className="contact-info">
              <div className="contact-info__block">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info__label">Address</div>
                  <div className="contact-info__value">123 Main Street</div>
                  <div className="contact-info__small">Oakley, CA 94561</div>
                </div>
              </div>

              <div className="contact-info__block">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info__label">Phone</div>
                  <div className="contact-info__value">(925) 000-0000</div>
                  <div className="contact-info__small">Tap to call · Usually answered in under 30 seconds</div>
                </div>
              </div>

              <div className="contact-info__block" style={{ display: 'block' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 'var(--space-md)', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                  <div className="contact-info__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info__label">Hours</div>
                    <div className="contact-info__value" style={{ color: '#22c55e' }}>Open now · until 11 PM</div>
                  </div>
                </div>
                <table className="hours-table">
                  <tbody>
                    {days.map((d, i) => (
                      <tr key={d} className={i === todayIdx ? 'is-today' : ''}>
                        <td>{d}{i === todayIdx && <span style={{ marginLeft: 8, color: 'var(--accent)' }}>·</span>}</td>
                        <td>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="ed-section ed-section--tight">
        <div className="container">
          <div className="reveal">
            <span className="ed-eyebrow">From Any Direction</span>
            <h2 className="ed-display">Three ways in. <em>One minute out.</em></h2>
          </div>
          <div style={{ marginTop: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }} data-stagger>
            {[
              { from: 'Highway 4', steps: 'Take the Main Street exit. Head south for 0.3 mi. We\'re on the right, at Laurel.' },
              { from: 'Brentwood', steps: 'Laurel Road west for 2 miles. Left at Main Street. We\'re on the corner.' },
              { from: 'Antioch',   steps: 'East on Highway 4. Exit at Main Street. Turn right — first lot on the left.' },
            ].map((d, i) => (
              <div key={i} className="dim-card reveal">
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>From {d.from}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{d.steps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="ed-section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="ed-eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</span>
            <h2 className="ed-display" style={{ margin: '0 auto var(--space-lg)' }}>Questions? <em>Say hello.</em></h2>
            <p className="ed-lead" style={{ margin: '0 auto var(--space-2xl)' }}>Feedback, vendor inquiries, anything else — we read every message and usually reply the same day.</p>
          </div>
          <div className="dim-card reveal">
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Topic</label>
                <select className="form-select">
                  <option>General question</option>
                  <option>Fuel or pricing</option>
                  <option>Rewards program</option>
                  <option>Feedback</option>
                  <option>Vendor / partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your message</label>
                <textarea className="form-textarea" placeholder="Tell us briefly — we'll take it from there." rows={4} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', border: 'none' }}>
                {sent ? 'Message Sent — Thanks!' : 'Send Message'}
              </button>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-md)', textAlign: 'center', letterSpacing: '0.08em' }}>
                We reply within one business day. Never shared, never spammed.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { DealsPage, StorePage, FuelPage, ContactPage });
