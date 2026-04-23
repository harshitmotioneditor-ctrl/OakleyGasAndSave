// Icons3D.jsx — premium 3D icon system (inline SVG with gradient shading).
// Soft realistic render style, consistent amber+teal palette, 80-120px baseline.
// All icons take an optional `size` prop and render with isometric-ish perspective,
// gradient material, soft inner shadows, and a ground-contact shadow.
//
// Naming: I3 prefix to distinguish from vanilla SVG icons.

// Shared gradient defs — one <defs> injected per icon instance (tiny footprint).
function I3Defs({ id }) {
  return (
    <defs>
      {/* Amber body gradient — primary metal/plastic */}
      <linearGradient id={`${id}-amber`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fbbf24"/>
        <stop offset="0.5" stopColor="#f59e0b"/>
        <stop offset="1" stopColor="#b45309"/>
      </linearGradient>
      <linearGradient id={`${id}-amberR`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fcd34d"/>
        <stop offset="0.4" stopColor="#f59e0b"/>
        <stop offset="1" stopColor="#92400e"/>
      </linearGradient>
      {/* Teal secondary */}
      <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5eead4"/>
        <stop offset="0.5" stopColor="#14b8a6"/>
        <stop offset="1" stopColor="#0f766e"/>
      </linearGradient>
      {/* Dark body — matte neutral */}
      <linearGradient id={`${id}-dark`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2a3140"/>
        <stop offset="0.5" stopColor="#1a1f2c"/>
        <stop offset="1" stopColor="#0d0f14"/>
      </linearGradient>
      {/* Glass highlight */}
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.55"/>
        <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
      {/* Ground shadow radial */}
      <radialGradient id={`${id}-ground`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#000000" stopOpacity="0.5"/>
        <stop offset="1" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
      {/* Amber glow */}
      <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#f59e0b" stopOpacity="0.6"/>
        <stop offset="1" stopColor="#f59e0b" stopOpacity="0"/>
      </radialGradient>
      {/* Soft drop shadow filter */}
      <filter id={`${id}-drop`} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="0" dy="6" result="off"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      {/* Subtle inner bevel */}
      <filter id={`${id}-bevel`}>
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur"/>
        <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.7" specularExponent="20" lightingColor="#ffffff" result="spec">
          <feDistantLight azimuth="45" elevation="55"/>
        </feSpecularLighting>
        <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMask"/>
        <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="specMask"/></feMerge>
      </filter>
    </defs>
  );
}

// ---------------------------------------------------------------------------
// Wrapper: consistent size + ground shadow + ambient glow
function I3Wrap({ id, size = 120, glow = true, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block' }}>
      <I3Defs id={id} />
      {/* ambient glow */}
      {glow && <ellipse cx="60" cy="108" rx="42" ry="6" fill={`url(#${id}-ground)`} />}
      {glow && <circle cx="60" cy="60" r="48" fill={`url(#${id}-glow)`} opacity="0.25"/>}
      {children}
    </svg>
  );
}

// ===========================================================================
// 1. FUEL PUMP — hero icon for the station
function I3Pump({ size }) {
  const id = 'i3pump';
  return (
    <I3Wrap id={id} size={size}>
      {/* base platform */}
      <ellipse cx="60" cy="104" rx="28" ry="4" fill="#0a0d14" opacity="0.6"/>
      {/* body */}
      <g filter={`url(#${id}-drop)`}>
        <rect x="36" y="28" width="40" height="72" rx="5" fill={`url(#${id}-dark)`} stroke="#3a4252" strokeWidth="0.5"/>
        {/* display screen */}
        <rect x="42" y="36" width="28" height="20" rx="2" fill="#0a0d14" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="0.8"/>
        <rect x="42" y="36" width="28" height="20" rx="2" fill={`url(#${id}-glass)`} opacity="0.15"/>
        {/* digital numbers */}
        <text x="56" y="50" textAnchor="middle" fontSize="8" fontWeight="800" fill="#f59e0b" fontFamily="'SF Mono', monospace">4.39</text>
        {/* grade buttons */}
        <rect x="42" y="62" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.65"/>
        <rect x="42" y="67" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.4"/>
        <rect x="42" y="72" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.25"/>
        {/* brand plate */}
        <rect x="40" y="80" width="32" height="14" rx="2" fill={`url(#${id}-amber)`}/>
        <rect x="40" y="80" width="32" height="6" rx="2" fill={`url(#${id}-glass)`}/>
        <text x="56" y="90" textAnchor="middle" fontSize="6" fontWeight="900" fill="#0d0f14" letterSpacing="1">OGS</text>
      </g>
      {/* nozzle/hose — right side */}
      <path d="M76 48 Q 92 48 92 62 L 92 86" stroke={`url(#${id}-dark)`} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <g filter={`url(#${id}-drop)`}>
        <rect x="85" y="82" width="14" height="22" rx="2.5" fill={`url(#${id}-amberR)`}/>
        <rect x="85" y="82" width="14" height="9" rx="2.5" fill={`url(#${id}-glass)`}/>
        <rect x="88" y="95" width="8" height="3" rx="0.5" fill="#0d0f14" opacity="0.6"/>
      </g>
      {/* top cap */}
      <rect x="38" y="22" width="36" height="8" rx="2" fill={`url(#${id}-amber)`}/>
      <rect x="38" y="22" width="36" height="3" rx="2" fill={`url(#${id}-glass)`}/>
    </I3Wrap>
  );
}

// 2. COFFEE CUP
function I3Coffee({ size }) {
  const id = 'i3coffee';
  return (
    <I3Wrap id={id} size={size}>
      {/* steam wisps */}
      <g opacity="0.55" stroke="#ffffff" strokeLinecap="round" fill="none" strokeWidth="1.5">
        <path d="M50 30 Q 45 22 52 16 Q 58 8 50 2"/>
        <path d="M62 28 Q 68 20 60 12 Q 54 6 62 -2"/>
        <path d="M72 32 Q 78 22 70 14"/>
      </g>
      {/* saucer */}
      <ellipse cx="60" cy="96" rx="32" ry="6" fill={`url(#${id}-dark)`} filter={`url(#${id}-drop)`}/>
      <ellipse cx="60" cy="94" rx="28" ry="4" fill="#1a1f2c"/>
      {/* cup body */}
      <g filter={`url(#${id}-drop)`}>
        <path d="M35 44 L 39 88 Q 39 94 45 94 L 75 94 Q 81 94 81 88 L 85 44 Z" fill={`url(#${id}-amberR)`}/>
        {/* body highlight */}
        <path d="M37 46 L 41 88 Q 41 90 43 90 L 48 90 L 44 46 Z" fill={`url(#${id}-glass)`} opacity="0.35"/>
        {/* handle */}
        <path d="M85 54 Q 102 54 102 68 Q 102 82 85 82" fill="none" stroke={`url(#${id}-amber)`} strokeWidth="5" strokeLinecap="round"/>
        <path d="M87 54 Q 98 56 98 68" fill="none" stroke={`url(#${id}-glass)`} strokeWidth="1.5" opacity="0.6"/>
        {/* rim */}
        <ellipse cx="60" cy="44" rx="25" ry="5" fill="#1a1f2c"/>
        <ellipse cx="60" cy="44" rx="23" ry="4" fill="#0d0f14"/>
        {/* coffee surface */}
        <ellipse cx="60" cy="44" rx="20" ry="3.5" fill="#3d2817"/>
        <ellipse cx="57" cy="43" rx="14" ry="2" fill="#5c3a20" opacity="0.6"/>
      </g>
    </I3Wrap>
  );
}

// 3. COLD CAN
function I3Can({ size }) {
  const id = 'i3can';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="104" rx="26" ry="4" fill="#0a0d14" opacity="0.6"/>
      <g filter={`url(#${id}-drop)`}>
        {/* can body */}
        <path d="M40 22 Q 40 18 44 18 L 76 18 Q 80 18 80 22 L 80 98 Q 80 102 76 102 L 44 102 Q 40 102 40 98 Z" fill={`url(#${id}-teal)`}/>
        {/* highlight */}
        <rect x="43" y="22" width="6" height="78" rx="1" fill={`url(#${id}-glass)`}/>
        {/* shadow edge */}
        <rect x="74" y="22" width="6" height="78" fill="#000000" opacity="0.28"/>
        {/* label band */}
        <rect x="40" y="46" width="40" height="28" fill="#0d0f14" opacity="0.22"/>
        <text x="60" y="64" textAnchor="middle" fontSize="9" fontWeight="900" fill="#ffffff" letterSpacing="1.5">COLD</text>
        {/* top */}
        <ellipse cx="60" cy="18" rx="20" ry="4" fill="#cbd5e1"/>
        <ellipse cx="60" cy="18" rx="20" ry="4" fill="#000" opacity="0.15"/>
        <ellipse cx="60" cy="17" rx="17" ry="3" fill="#e2e8f0"/>
        {/* pull tab */}
        <rect x="55" y="14" width="10" height="3" rx="1" fill="#94a3b8"/>
        {/* condensation */}
        <circle cx="46" cy="68" r="1.5" fill="#ffffff" opacity="0.7"/>
        <circle cx="52" cy="82" r="1" fill="#ffffff" opacity="0.6"/>
        <circle cx="70" cy="58" r="1" fill="#ffffff" opacity="0.5"/>
      </g>
    </I3Wrap>
  );
}

// 4. SNACK / CHIP BAG
function I3Snack({ size }) {
  const id = 'i3snack';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="106" rx="28" ry="4" fill="#0a0d14" opacity="0.5"/>
      <g filter={`url(#${id}-drop)`}>
        <path d="M32 22 L 88 22 L 90 30 L 88 98 Q 88 104 82 104 L 38 104 Q 32 104 32 98 L 30 30 Z"
              fill={`url(#${id}-amberR)`}/>
        {/* top crimp */}
        <path d="M32 22 L 88 22 L 88 26 L 32 26 Z" fill="#0d0f14" opacity="0.55"/>
        <path d="M34 20 L 38 22 L 42 20 L 46 22 L 50 20 L 54 22 L 58 20 L 62 22 L 66 20 L 70 22 L 74 20 L 78 22 L 82 20 L 86 22"
              stroke="#0d0f14" fill="none" strokeWidth="1" opacity="0.5"/>
        {/* shine */}
        <path d="M38 30 Q 38 80 44 100" fill={`url(#${id}-glass)`} opacity="0.5"/>
        <rect x="42" y="30" width="3" height="70" fill={`url(#${id}-glass)`} opacity="0.35"/>
        {/* label */}
        <rect x="40" y="50" width="40" height="24" rx="2" fill="#0d0f14" opacity="0.3"/>
        <text x="60" y="62" textAnchor="middle" fontSize="7" fontWeight="900" fill="#0d0f14">CRISP</text>
        <text x="60" y="71" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="#0d0f14" opacity="0.7" letterSpacing="1">ORIGINAL</text>
      </g>
    </I3Wrap>
  );
}

// 5. SHOPPING BAG
function I3Bag({ size }) {
  const id = 'i3bag';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="108" rx="32" ry="5" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`}>
        {/* handles */}
        <path d="M44 38 Q 44 22 60 22 Q 76 22 76 38" stroke={`url(#${id}-amber)`} fill="none" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M46 38 Q 46 24 60 24 Q 74 24 74 38" stroke={`url(#${id}-glass)`} fill="none" strokeWidth="1" opacity="0.7"/>
        {/* body */}
        <path d="M28 38 L 92 38 L 88 104 Q 88 108 84 108 L 36 108 Q 32 108 32 104 Z" fill={`url(#${id}-dark)`}/>
        {/* highlight */}
        <path d="M30 40 L 38 40 L 40 102 L 34 102 Z" fill={`url(#${id}-glass)`} opacity="0.15"/>
        {/* shine band */}
        <rect x="28" y="44" width="64" height="2" fill="#f59e0b" opacity="0.65"/>
        {/* logo mark */}
        <text x="60" y="80" textAnchor="middle" fontSize="20" fontWeight="900" fill="#f59e0b" fontStyle="italic">O</text>
      </g>
    </I3Wrap>
  );
}

// 6. MAP PIN
function I3Pin({ size }) {
  const id = 'i3pin';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="106" rx="14" ry="3" fill="#0a0d14" opacity="0.8"/>
      <g filter={`url(#${id}-drop)`}>
        <path d="M60 10 C 38 10 28 30 28 48 C 28 70 50 92 60 104 C 70 92 92 70 92 48 C 92 30 82 10 60 10 Z"
              fill={`url(#${id}-amberR)`}/>
        {/* highlight */}
        <path d="M40 22 Q 50 14 60 14" stroke={`url(#${id}-glass)`} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
        {/* inner well */}
        <circle cx="60" cy="46" r="16" fill="#0d0f14" opacity="0.88"/>
        <circle cx="60" cy="44" r="13" fill={`url(#${id}-dark)`}/>
        <circle cx="60" cy="44" r="6" fill={`url(#${id}-amber)`}/>
        <circle cx="58" cy="42" r="3" fill={`url(#${id}-glass)`} opacity="0.6"/>
      </g>
    </I3Wrap>
  );
}

// 7. CREDIT CARD
function I3Card({ size }) {
  const id = 'i3card';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="98" rx="36" ry="5" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`} transform="rotate(-12 60 60)">
        {/* card body */}
        <rect x="18" y="36" width="84" height="54" rx="6" fill={`url(#${id}-dark)`}/>
        {/* accent corner */}
        <path d="M18 36 L 18 58 Q 18 56 20 55 L 45 55 L 45 36 Z" fill={`url(#${id}-amber)`} opacity="0.8"/>
        {/* shine */}
        <rect x="18" y="36" width="84" height="16" rx="6" fill={`url(#${id}-glass)`} opacity="0.18"/>
        {/* chip */}
        <rect x="26" y="52" width="14" height="11" rx="1.5" fill="#d4af37"/>
        <rect x="28" y="54" width="10" height="7" rx="0.5" fill="#b8941f" opacity="0.6"/>
        <line x1="28" y1="57" x2="38" y2="57" stroke="#0d0f14" strokeWidth="0.3"/>
        <line x1="33" y1="53" x2="33" y2="62" stroke="#0d0f14" strokeWidth="0.3"/>
        {/* wave (contactless) */}
        <g transform="translate(44, 55)" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.85">
          <path d="M0 2 Q 3 5 0 8"/>
          <path d="M3 0 Q 8 5 3 10"/>
        </g>
        {/* number row */}
        <text x="26" y="80" fontSize="7" fill="#94a3b8" fontFamily="'SF Mono', monospace" letterSpacing="2">•••• 4521</text>
      </g>
    </I3Wrap>
  );
}

// 8. REWARDS BADGE / MEDAL
function I3Badge({ size, tier = 'gold' }) {
  const id = `i3badge-${tier}`;
  const colors = {
    bronze: { a: '#d97706', b: '#b45309', c: '#7c2d12' },
    silver: { a: '#e2e8f0', b: '#94a3b8', c: '#475569' },
    gold:   { a: '#fbbf24', b: '#f59e0b', c: '#b45309' },
  }[tier] || { a: '#fbbf24', b: '#f59e0b', c: '#b45309' };
  return (
    <svg width={size || 120} height={size || 120} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={colors.a}/>
          <stop offset="0.5" stopColor={colors.b}/>
          <stop offset="1" stopColor={colors.c}/>
        </linearGradient>
        <radialGradient id={`${id}-shine`} cx="0.35" cy="0.3" r="0.3">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.75"/>
          <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id={`${id}-glow2`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={colors.a} stopOpacity="0.5"/>
          <stop offset="1" stopColor={colors.a} stopOpacity="0"/>
        </radialGradient>
        <filter id={`${id}-drop`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="6" result="off"/>
          <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <ellipse cx="60" cy="108" rx="30" ry="4" fill="#000" opacity="0.45"/>
      <circle cx="60" cy="60" r="54" fill={`url(#${id}-glow2)`}/>
      <g filter={`url(#${id}-drop)`}>
        {/* ribbon tails */}
        <path d="M38 62 L 30 102 L 48 92 L 58 80 Z" fill={`url(#${id}-c)`} opacity="0.7"/>
        <path d="M82 62 L 90 102 L 72 92 L 62 80 Z" fill={`url(#${id}-c)`} opacity="0.7"/>
        {/* outer ring */}
        <circle cx="60" cy="56" r="36" fill={`url(#${id}-c)`}/>
        {/* inset */}
        <circle cx="60" cy="56" r="28" fill={colors.c} opacity="0.9"/>
        <circle cx="60" cy="56" r="28" fill={`url(#${id}-c)`} opacity="0.6"/>
        {/* ticks around ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 60 + Math.cos(a) * 33;
          const y1 = 56 + Math.sin(a) * 33;
          const x2 = 60 + Math.cos(a) * 35.5;
          const y2 = 56 + Math.sin(a) * 35.5;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.c} strokeWidth="1" opacity="0.7"/>;
        })}
        {/* star */}
        <g transform="translate(60 56)">
          <path d="M0 -16 L 4.7 -5 L 16 -4 L 7 4 L 10 16 L 0 9 L -10 16 L -7 4 L -16 -4 L -4.7 -5 Z" fill="#ffffff" opacity="0.95"/>
        </g>
        {/* top shine */}
        <circle cx="60" cy="56" r="36" fill={`url(#${id}-shine)`}/>
      </g>
    </svg>
  );
}

// 9. CLOCK (open now)
function I3Clock({ size }) {
  const id = 'i3clock';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="102" rx="28" ry="4" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`}>
        <circle cx="60" cy="60" r="42" fill={`url(#${id}-dark)`}/>
        <circle cx="60" cy="60" r="36" fill="#0d0f14"/>
        {/* shine */}
        <path d="M30 40 Q 40 24 60 22" stroke={`url(#${id}-glass)`} strokeWidth="5" fill="none" opacity="0.6" strokeLinecap="round"/>
        {/* tick marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const big = i % 3 === 0;
          const x1 = 60 + Math.cos(a) * (big ? 28 : 30);
          const y1 = 60 + Math.sin(a) * (big ? 28 : 30);
          const x2 = 60 + Math.cos(a) * 34;
          const y2 = 60 + Math.sin(a) * 34;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeOpacity={big ? 0.95 : 0.5} strokeWidth={big ? 2 : 1} strokeLinecap="round"/>;
        })}
        {/* hour hand (~7:30 direction) */}
        <line x1="60" y1="60" x2="46" y2="72" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round"/>
        {/* minute hand */}
        <line x1="60" y1="60" x2="60" y2="34" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="60" cy="60" r="3.5" fill="#f59e0b"/>
        <circle cx="60" cy="60" r="1.5" fill="#0d0f14"/>
      </g>
      {/* "open" dot — pulsing vibe */}
      <circle cx="96" cy="24" r="8" fill="#22c55e"/>
      <circle cx="96" cy="24" r="8" fill="#22c55e" opacity="0.4">
        <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="96" cy="24" r="3.5" fill="#ffffff"/>
    </I3Wrap>
  );
}

// 10. SHIELD (trust/quality)
function I3Shield({ size }) {
  const id = 'i3shield';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="108" rx="22" ry="3" fill="#0a0d14" opacity="0.6"/>
      <g filter={`url(#${id}-drop)`}>
        <path d="M60 10 L 92 22 Q 92 70 60 104 Q 28 70 28 22 Z" fill={`url(#${id}-amberR)`}/>
        <path d="M60 14 L 88 24 Q 88 68 60 98 Q 32 68 32 24 Z" fill="#0d0f14" opacity="0.8"/>
        <path d="M60 18 L 84 28 Q 84 66 60 92 Q 36 66 36 28 Z" fill={`url(#${id}-amber)`} opacity="0.35"/>
        {/* check */}
        <path d="M46 54 L 56 66 L 76 42" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 54 L 56 66 L 76 42" stroke={`url(#${id}-amber)`} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* top shine */}
        <path d="M60 10 L 80 18 L 60 26 L 40 18 Z" fill={`url(#${id}-glass)`} opacity="0.55"/>
      </g>
    </I3Wrap>
  );
}

// 11. MOBILE / PAY
function I3Phone({ size }) {
  const id = 'i3phone';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="108" rx="22" ry="3" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`} transform="rotate(-8 60 60)">
        <rect x="38" y="12" width="44" height="84" rx="8" fill={`url(#${id}-dark)`}/>
        <rect x="42" y="18" width="36" height="68" rx="3" fill="#0a0d14"/>
        <rect x="42" y="18" width="36" height="16" fill={`url(#${id}-glass)`} opacity="0.12"/>
        {/* screen content — pay card */}
        <rect x="46" y="32" width="28" height="18" rx="2" fill={`url(#${id}-amber)`}/>
        <rect x="48" y="35" width="6" height="5" rx="0.5" fill="#d4af37"/>
        <text x="60" y="60" textAnchor="middle" fontSize="6" fontWeight="800" fill="#f59e0b">PAY</text>
        <text x="60" y="70" textAnchor="middle" fontSize="4.5" fill="#94a3b8">Hold near reader</text>
        {/* wave arcs */}
        <g transform="translate(60 82)" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round">
          <path d="M-6 0 Q 0 -4 6 0"/>
          <path d="M-10 3 Q 0 -7 10 3"/>
        </g>
      </g>
    </I3Wrap>
  );
}

// 12. ROAD / DIRECTIONS
function I3Road({ size }) {
  const id = 'i3road';
  return (
    <I3Wrap id={id} size={size} glow={false}>
      <ellipse cx="60" cy="106" rx="42" ry="4" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`}>
        {/* road plane in perspective */}
        <path d="M42 30 L 78 30 L 100 100 L 20 100 Z" fill={`url(#${id}-dark)`}/>
        <path d="M42 30 L 78 30 L 100 100 L 20 100 Z" fill="#0a0d14" opacity="0.5"/>
        {/* center dashes */}
        <g fill="#f59e0b">
          <rect x="58.5" y="36" width="3" height="8"/>
          <rect x="58" y="50" width="4" height="10"/>
          <rect x="57" y="66" width="6" height="12"/>
          <rect x="56" y="84" width="8" height="16"/>
        </g>
        {/* edge markers */}
        <line x1="42" y1="30" x2="20" y2="100" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
        <line x1="78" y1="30" x2="100" y2="100" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
      </g>
      {/* road sign shield */}
      <g filter={`url(#${id}-drop)`} transform="translate(60 28)">
        <path d="M0 -24 L 14 -20 L 16 -2 Q 16 12 0 22 Q -16 12 -16 -2 L -14 -20 Z" fill={`url(#${id}-amber)`}/>
        <text x="0" y="7" textAnchor="middle" fontSize="18" fontWeight="900" fill="#0d0f14">4</text>
      </g>
    </I3Wrap>
  );
}

// 13. AIR/WATER (service pump head)
function I3Air({ size }) {
  const id = 'i3air';
  return (
    <I3Wrap id={id} size={size}>
      <ellipse cx="60" cy="106" rx="24" ry="4" fill="#0a0d14" opacity="0.55"/>
      <g filter={`url(#${id}-drop)`}>
        <rect x="46" y="30" width="28" height="74" rx="4" fill={`url(#${id}-dark)`}/>
        <rect x="48" y="34" width="24" height="14" rx="2" fill="#0a0d14"/>
        {/* gauge */}
        <circle cx="60" cy="58" r="8" fill="#0a0d14"/>
        <circle cx="60" cy="58" r="6" fill="#f59e0b" opacity="0.85"/>
        <line x1="60" y1="58" x2="64" y2="54" stroke="#0d0f14" strokeWidth="1.5" strokeLinecap="round"/>
        {/* buttons */}
        <circle cx="54" cy="78" r="3" fill="#22c55e"/>
        <circle cx="66" cy="78" r="3" fill="#ef4444"/>
        {/* hose */}
        <path d="M74 50 Q 92 52 92 70 Q 92 92 72 96" stroke="#1a1f2c" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="72" cy="96" r="4" fill={`url(#${id}-amber)`}/>
      </g>
    </I3Wrap>
  );
}

// Export all
Object.assign(window, {
  I3Pump, I3Coffee, I3Can, I3Snack, I3Bag, I3Pin, I3Card, I3Badge,
  I3Clock, I3Shield, I3Phone, I3Road, I3Air,
});
