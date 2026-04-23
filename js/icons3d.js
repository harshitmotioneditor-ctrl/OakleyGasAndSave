/* ───────────────────────────────────────────────────────────────
   icons3d.js  –  Vanilla JS 3D icon SVG generators
   Converted from React JSX components to template-literal fns.
   Each function returns an SVG HTML string.
   ─────────────────────────────────────────────────────────────── */

// ── Shared gradient / filter defs ────────────────────────────
function i3Defs(id) {
  return `
  <defs>
    <linearGradient id="${id}-amber" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.5" stop-color="#f59e0b"/>
      <stop offset="1" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="${id}-amberR" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fcd34d"/>
      <stop offset="0.4" stop-color="#f59e0b"/>
      <stop offset="1" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="${id}-teal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5eead4"/>
      <stop offset="0.5" stop-color="#14b8a6"/>
      <stop offset="1" stop-color="#0f766e"/>
    </linearGradient>
    <linearGradient id="${id}-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2a3140"/>
      <stop offset="0.5" stop-color="#1a1f2c"/>
      <stop offset="1" stop-color="#0d0f14"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="${id}-ground" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#000000" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="1" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}-drop" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="6" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>`;
}

// ── Outer SVG wrapper (ground shadow + optional glow) ────────
function i3Wrap(id, size, inner, glow) {
  const showGlow = glow !== false;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120">
  ${i3Defs(id)}
  <ellipse cx="60" cy="112" rx="38" ry="6" fill="url(#${id}-ground)"/>
  ${showGlow ? `<circle cx="60" cy="100" r="30" fill="url(#${id}-glow)" opacity="0.45"/>` : ''}
  ${inner}
</svg>`;
}

// ──────────────────────────────────────────────────────────────
// 1. Fuel Pump
// ──────────────────────────────────────────────────────────────
function i3Pump(size = 120) {
  const id = 'i3pump';
  const inner = `
  <ellipse cx="60" cy="104" rx="28" ry="4" fill="#0a0d14" opacity="0.6"/>
  <g filter="url(#${id}-drop)">
    <rect x="36" y="28" width="40" height="72" rx="5" fill="url(#${id}-dark)" stroke="#3a4252" stroke-width="0.5"/>
    <rect x="42" y="36" width="28" height="20" rx="2" fill="#0a0d14" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="0.8"/>
    <rect x="42" y="36" width="28" height="20" rx="2" fill="url(#${id}-glass)" opacity="0.15"/>
    <text x="56" y="50" text-anchor="middle" font-size="8" font-weight="800" fill="#f59e0b" font-family="'SF Mono', monospace">4.39</text>
    <rect x="42" y="62" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.65"/>
    <rect x="42" y="67" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.4"/>
    <rect x="42" y="72" width="28" height="3" rx="1" fill="#f59e0b" opacity="0.25"/>
    <rect x="40" y="80" width="32" height="14" rx="2" fill="url(#${id}-amber)"/>
    <rect x="40" y="80" width="32" height="6" rx="2" fill="url(#${id}-glass)"/>
    <text x="56" y="90" text-anchor="middle" font-size="6" font-weight="900" fill="#0d0f14" letter-spacing="1">OGS</text>
  </g>
  <path d="M76 48 Q 92 48 92 62 L 92 86" stroke="url(#${id}-dark)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <g filter="url(#${id}-drop)">
    <rect x="85" y="82" width="14" height="22" rx="2.5" fill="url(#${id}-amberR)"/>
    <rect x="85" y="82" width="14" height="9" rx="2.5" fill="url(#${id}-glass)"/>
    <rect x="88" y="95" width="8" height="3" rx="0.5" fill="#0d0f14" opacity="0.6"/>
  </g>
  <rect x="38" y="22" width="36" height="8" rx="2" fill="url(#${id}-amber)"/>
  <rect x="38" y="22" width="36" height="3" rx="2" fill="url(#${id}-glass)"/>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 2. Coffee Cup
// ──────────────────────────────────────────────────────────────
function i3Coffee(size = 120) {
  const id = 'i3coffee';
  const inner = `
  <g opacity="0.55" stroke="#ffffff" stroke-linecap="round" fill="none" stroke-width="1.5">
    <path d="M50 30 Q 45 22 52 16 Q 58 8 50 2"/>
    <path d="M62 28 Q 68 20 60 12 Q 54 6 62 -2"/>
    <path d="M72 32 Q 78 22 70 14"/>
  </g>
  <ellipse cx="60" cy="96" rx="32" ry="6" fill="url(#${id}-dark)" filter="url(#${id}-drop)"/>
  <ellipse cx="60" cy="94" rx="28" ry="4" fill="#1a1f2c"/>
  <g filter="url(#${id}-drop)">
    <path d="M35 44 L 39 88 Q 39 94 45 94 L 75 94 Q 81 94 81 88 L 85 44 Z" fill="url(#${id}-amberR)"/>
    <path d="M37 46 L 41 88 Q 41 90 43 90 L 48 90 L 44 46 Z" fill="url(#${id}-glass)" opacity="0.35"/>
    <path d="M85 54 Q 102 54 102 68 Q 102 82 85 82" fill="none" stroke="url(#${id}-amber)" stroke-width="5" stroke-linecap="round"/>
    <path d="M87 54 Q 98 56 98 68" fill="none" stroke="url(#${id}-glass)" stroke-width="1.5" opacity="0.6"/>
    <ellipse cx="60" cy="44" rx="25" ry="5" fill="#1a1f2c"/>
    <ellipse cx="60" cy="44" rx="23" ry="4" fill="#0d0f14"/>
    <ellipse cx="60" cy="44" rx="20" ry="3.5" fill="#3d2817"/>
    <ellipse cx="57" cy="43" rx="14" ry="2" fill="#5c3a20" opacity="0.6"/>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 3. Cold Drink Can
// ──────────────────────────────────────────────────────────────
function i3Can(size = 120) {
  const id = 'i3can';
  const inner = `
  <ellipse cx="60" cy="104" rx="26" ry="4" fill="#0a0d14" opacity="0.6"/>
  <g filter="url(#${id}-drop)">
    <path d="M40 22 Q 40 18 44 18 L 76 18 Q 80 18 80 22 L 80 98 Q 80 102 76 102 L 44 102 Q 40 102 40 98 Z" fill="url(#${id}-teal)"/>
    <rect x="43" y="22" width="6" height="78" rx="1" fill="url(#${id}-glass)"/>
    <rect x="74" y="22" width="6" height="78" fill="#000000" opacity="0.28"/>
    <rect x="40" y="46" width="40" height="28" fill="#0d0f14" opacity="0.22"/>
    <text x="60" y="64" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff" letter-spacing="1.5">COLD</text>
    <ellipse cx="60" cy="18" rx="20" ry="4" fill="#cbd5e1"/>
    <ellipse cx="60" cy="18" rx="20" ry="4" fill="#000" opacity="0.15"/>
    <ellipse cx="60" cy="17" rx="17" ry="3" fill="#e2e8f0"/>
    <rect x="55" y="14" width="10" height="3" rx="1" fill="#94a3b8"/>
    <circle cx="46" cy="68" r="1.5" fill="#ffffff" opacity="0.7"/>
    <circle cx="52" cy="82" r="1" fill="#ffffff" opacity="0.6"/>
    <circle cx="70" cy="58" r="1" fill="#ffffff" opacity="0.5"/>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 4. Snack / Chip Bag
// ──────────────────────────────────────────────────────────────
function i3Snack(size = 120) {
  const id = 'i3snack';
  const inner = `
  <ellipse cx="60" cy="106" rx="28" ry="4" fill="#0a0d14" opacity="0.5"/>
  <g filter="url(#${id}-drop)">
    <path d="M32 22 L 88 22 L 90 30 L 88 98 Q 88 104 82 104 L 38 104 Q 32 104 32 98 L 30 30 Z" fill="url(#${id}-amberR)"/>
    <path d="M32 22 L 88 22 L 88 26 L 32 26 Z" fill="#0d0f14" opacity="0.55"/>
    <path d="M34 20 L 38 22 L 42 20 L 46 22 L 50 20 L 54 22 L 58 20 L 62 22 L 66 20 L 70 22 L 74 20 L 78 22 L 82 20 L 86 22" stroke="#0d0f14" fill="none" stroke-width="1" opacity="0.5"/>
    <path d="M38 30 Q 38 80 44 100" fill="url(#${id}-glass)" opacity="0.5"/>
    <rect x="42" y="30" width="3" height="70" fill="url(#${id}-glass)" opacity="0.35"/>
    <rect x="40" y="50" width="40" height="24" rx="2" fill="#0d0f14" opacity="0.3"/>
    <text x="60" y="62" text-anchor="middle" font-size="7" font-weight="900" fill="#0d0f14">CRISP</text>
    <text x="60" y="71" text-anchor="middle" font-size="4.5" font-weight="700" fill="#0d0f14" opacity="0.7" letter-spacing="1">ORIGINAL</text>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 5. Shopping Bag
// ──────────────────────────────────────────────────────────────
function i3Bag(size = 120) {
  const id = 'i3bag';
  const inner = `
  <ellipse cx="60" cy="108" rx="32" ry="5" fill="#0a0d14" opacity="0.55"/>
  <g filter="url(#${id}-drop)">
    <path d="M44 38 Q 44 22 60 22 Q 76 22 76 38" stroke="url(#${id}-amber)" fill="none" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M46 38 Q 46 24 60 24 Q 74 24 74 38" stroke="url(#${id}-glass)" fill="none" stroke-width="1" opacity="0.7"/>
    <path d="M28 38 L 92 38 L 88 104 Q 88 108 84 108 L 36 108 Q 32 108 32 104 Z" fill="url(#${id}-dark)"/>
    <path d="M30 40 L 38 40 L 40 102 L 34 102 Z" fill="url(#${id}-glass)" opacity="0.15"/>
    <rect x="28" y="44" width="64" height="2" fill="#f59e0b" opacity="0.65"/>
    <text x="60" y="80" text-anchor="middle" font-size="20" font-weight="900" fill="#f59e0b" font-style="italic">O</text>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 6. Map Pin
// ──────────────────────────────────────────────────────────────
function i3Pin(size = 120) {
  const id = 'i3pin';
  const inner = `
  <ellipse cx="60" cy="106" rx="14" ry="3" fill="#0a0d14" opacity="0.8"/>
  <g filter="url(#${id}-drop)">
    <path d="M60 10 C 38 10 28 30 28 48 C 28 70 50 92 60 104 C 70 92 92 70 92 48 C 92 30 82 10 60 10 Z" fill="url(#${id}-amberR)"/>
    <path d="M40 22 Q 50 14 60 14" stroke="url(#${id}-glass)" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
    <circle cx="60" cy="46" r="16" fill="#0d0f14" opacity="0.88"/>
    <circle cx="60" cy="44" r="13" fill="url(#${id}-dark)"/>
    <circle cx="60" cy="44" r="6" fill="url(#${id}-amber)"/>
    <circle cx="58" cy="42" r="3" fill="url(#${id}-glass)" opacity="0.6"/>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 7. Rewards Badge / Medal  (custom SVG – does not use i3Wrap)
// ──────────────────────────────────────────────────────────────
function i3Badge(size = 120, tier = 'gold') {
  const id = 'i3badge-' + tier;
  const palettes = {
    bronze: { a: '#d97706', b: '#b45309', c: '#7c2d12' },
    silver: { a: '#e2e8f0', b: '#94a3b8', c: '#475569' },
    gold:   { a: '#fbbf24', b: '#f59e0b', c: '#b45309' }
  };
  const c = palettes[tier] || palettes.gold;

  // Generate 24 tick marks
  let ticks = '';
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x1 = 60 + Math.cos(angle) * 33;
    const y1 = 56 + Math.sin(angle) * 33;
    const x2 = 60 + Math.cos(angle) * 35.5;
    const y2 = 56 + Math.sin(angle) * 35.5;
    ticks += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${c.a}" stroke-width="1.2"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="${id}-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c.a}"/>
      <stop offset="0.5" stop-color="${c.b}"/>
      <stop offset="1" stop-color="${c.c}"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${c.b}" stop-opacity="0.6"/>
      <stop offset="1" stop-color="${c.b}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-ground" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#000000" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}-drop" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="6" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Ground shadow & glow -->
  <ellipse cx="60" cy="112" rx="38" ry="6" fill="url(#${id}-ground)"/>
  <circle cx="60" cy="100" r="30" fill="url(#${id}-glow)" opacity="0.45"/>

  <!-- Ribbon tails -->
  <g filter="url(#${id}-drop)">
    <path d="M42 80 L 36 110 L 44 102 L 52 110 L 50 80 Z" fill="url(#${id}-grad)"/>
    <path d="M78 80 L 84 110 L 76 102 L 68 110 L 70 80 Z" fill="url(#${id}-grad)"/>
  </g>

  <!-- Medal body -->
  <g filter="url(#${id}-drop)">
    <!-- Outer ring -->
    <circle cx="60" cy="56" r="36" fill="url(#${id}-grad)"/>
    <!-- Inset -->
    <circle cx="60" cy="56" r="30" fill="#0d0f14" opacity="0.85"/>

    <!-- Tick marks -->
    ${ticks}

    <!-- Star -->
    <g transform="translate(60,56)">
      <path d="M0 -16 L 4.7 -5 L 16 -4 L 7 4 L 10 16 L 0 9 L -10 16 L -7 4 L -16 -4 L -4.7 -5 Z" fill="url(#${id}-grad)"/>
    </g>

    <!-- Shine -->
    <circle cx="60" cy="56" r="36" fill="url(#${id}-glass)" opacity="0.35"/>
  </g>
</svg>`;
}

// ──────────────────────────────────────────────────────────────
// 8. Shield / Trust
// ──────────────────────────────────────────────────────────────
function i3Shield(size = 120) {
  const id = 'i3shield';
  const inner = `
  <ellipse cx="60" cy="108" rx="22" ry="3" fill="#0a0d14" opacity="0.6"/>
  <g filter="url(#${id}-drop)">
    <path d="M60 10 L 92 22 Q 92 70 60 104 Q 28 70 28 22 Z" fill="url(#${id}-amberR)"/>
    <path d="M60 14 L 88 24 Q 88 68 60 98 Q 32 68 32 24 Z" fill="#0d0f14" opacity="0.8"/>
    <path d="M60 18 L 84 28 Q 84 66 60 92 Q 36 66 36 28 Z" fill="url(#${id}-amber)" opacity="0.35"/>
    <path d="M46 54 L 56 66 L 76 42" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M46 54 L 56 66 L 76 42" stroke="url(#${id}-amber)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 10 L 80 18 L 60 26 L 40 18 Z" fill="url(#${id}-glass)" opacity="0.55"/>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 9. Air / Water Service
// ──────────────────────────────────────────────────────────────
function i3Air(size = 120) {
  const id = 'i3air';
  const inner = `
  <ellipse cx="60" cy="106" rx="24" ry="4" fill="#0a0d14" opacity="0.55"/>
  <g filter="url(#${id}-drop)">
    <rect x="46" y="30" width="28" height="74" rx="4" fill="url(#${id}-dark)"/>
    <rect x="48" y="34" width="24" height="14" rx="2" fill="#0a0d14"/>
    <circle cx="60" cy="58" r="8" fill="#0a0d14"/>
    <circle cx="60" cy="58" r="6" fill="#f59e0b" opacity="0.85"/>
    <line x1="60" y1="58" x2="64" y2="54" stroke="#0d0f14" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="54" cy="78" r="3" fill="#22c55e"/>
    <circle cx="66" cy="78" r="3" fill="#ef4444"/>
    <path d="M74 50 Q 92 52 92 70 Q 92 92 72 96" stroke="#1a1f2c" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="72" cy="96" r="4" fill="url(#${id}-amber)"/>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 10. Credit Card
// ──────────────────────────────────────────────────────────────
function i3Card(size = 120) {
  const id = 'i3card';
  const inner = `
  <ellipse cx="60" cy="98" rx="36" ry="5" fill="#0a0d14" opacity="0.55"/>
  <g filter="url(#${id}-drop)" transform="rotate(-12 60 60)">
    <rect x="18" y="36" width="84" height="54" rx="6" fill="url(#${id}-dark)"/>
    <path d="M18 36 L 18 58 Q 18 56 20 55 L 45 55 L 45 36 Z" fill="url(#${id}-amber)" opacity="0.8"/>
    <rect x="18" y="36" width="84" height="16" rx="6" fill="url(#${id}-glass)" opacity="0.18"/>
    <rect x="26" y="52" width="14" height="11" rx="1.5" fill="#d4af37"/>
    <rect x="28" y="54" width="10" height="7" rx="0.5" fill="#b8941f" opacity="0.6"/>
    <line x1="28" y1="57" x2="38" y2="57" stroke="#0d0f14" stroke-width="0.3"/>
    <line x1="33" y1="53" x2="33" y2="62" stroke="#0d0f14" stroke-width="0.3"/>
    <g transform="translate(44, 55)" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.85">
      <path d="M0 2 Q 3 5 0 8"/>
      <path d="M3 0 Q 8 5 3 10"/>
    </g>
    <text x="26" y="80" font-size="7" fill="#94a3b8" font-family="'SF Mono', monospace" letter-spacing="2">•••• 4521</text>
  </g>`;
  return i3Wrap(id, size, inner);
}

// ──────────────────────────────────────────────────────────────
// 11. Road / Directions  (no glow)
// ──────────────────────────────────────────────────────────────
function i3Road(size = 120) {
  const id = 'i3road';
  const inner = `
  <ellipse cx="60" cy="106" rx="42" ry="4" fill="#0a0d14" opacity="0.55"/>
  <g filter="url(#${id}-drop)">
    <path d="M42 30 L 78 30 L 100 100 L 20 100 Z" fill="url(#${id}-dark)"/>
    <path d="M42 30 L 78 30 L 100 100 L 20 100 Z" fill="#0a0d14" opacity="0.5"/>
    <g fill="#f59e0b">
      <rect x="58.5" y="36" width="3" height="8"/>
      <rect x="58" y="50" width="4" height="10"/>
      <rect x="57" y="66" width="6" height="12"/>
      <rect x="56" y="84" width="8" height="16"/>
    </g>
    <line x1="42" y1="30" x2="20" y2="100" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
    <line x1="78" y1="30" x2="100" y2="100" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
  </g>
  <g filter="url(#${id}-drop)" transform="translate(60 28)">
    <path d="M0 -24 L 14 -20 L 16 -2 Q 16 12 0 22 Q -16 12 -16 -2 L -14 -20 Z" fill="url(#${id}-amber)"/>
    <text x="0" y="7" text-anchor="middle" font-size="18" font-weight="900" fill="#0d0f14">4</text>
  </g>`;
  return i3Wrap(id, size, inner, false);
}

// ── Expose on window ─────────────────────────────────────────
window.I3Icons = {
  i3Pump,
  i3Coffee,
  i3Can,
  i3Snack,
  i3Bag,
  i3Pin,
  i3Badge,
  i3Shield,
  i3Air,
  i3Card,
  i3Road
};
