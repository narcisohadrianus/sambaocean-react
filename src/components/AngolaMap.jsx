/**
 * Mapa esquemático de Angola com ligações a partir de Luanda.
 * Contorno simplificado (aproximado) — serve apenas como ilustração de cobertura.
 */
const K = 30;
const project = ([lon, lat]) => [+((lon - 11.4) * K).toFixed(1), +((-lat - 4.1) * K).toFixed(1)];

const mainland = [
  [12.25, -6.05], [12.9, -5.95], [13.45, -5.85], [14.6, -5.9], [15.8, -5.88], [16.55, -5.9],
  [16.7, -6.6], [17.1, -7.4], [17.6, -8.05], [18.5, -8.0], [19.4, -7.2], [20.4, -6.95],
  [20.6, -7.3], [21.8, -7.3], [21.85, -8.5], [21.9, -9.5], [22.3, -10.6], [23.2, -10.9],
  [24.0, -11.1], [24.0, -13.0], [22.0, -13.0], [22.0, -16.2], [23.4, -17.6], [21.4, -18.0],
  [20.5, -17.95], [19.4, -17.85], [18.5, -17.45], [16.2, -17.4], [14.2, -17.4], [13.4, -16.97],
  [12.5, -17.25], [11.75, -17.25], [11.8, -16.5], [11.85, -15.8], [12.15, -15.2], [12.4, -14.3],
  [12.6, -13.6], [13.5, -12.4], [13.8, -11.5], [13.8, -11.0], [13.3, -10.0], [13.15, -9.3],
  [13.2, -8.8], [12.9, -8.0], [12.6, -7.1],
];
const cabinda = [
  [12.15, -5.8], [12.5, -5.75], [12.55, -5.15], [13.05, -4.75], [12.85, -4.4], [12.4, -4.6],
  [12.0, -5.0], [11.9, -5.3],
];

const toPath = (pts) => `M${pts.map((p) => project(p).join(' ')).join('L')}Z`;

const luanda = [13.23, -8.84];
const cities = [
  { name: 'Cabinda', c: [12.2, -5.55], dx: 7 },
  { name: "M'banza Kongo", c: [14.24, -6.27], dx: 7 },
  { name: 'Uíge', c: [15.06, -7.61], dx: 7 },
  { name: 'Caxito', c: [13.66, -8.58], label: false },
  { name: 'Ndalatando', c: [14.91, -9.3], label: false },
  { name: 'Malanje', c: [16.34, -9.54], dx: 7 },
  { name: 'Dundo', c: [20.83, -7.37], dx: -7, anchor: 'end', dy: 13 },
  { name: 'Saurimo', c: [20.39, -9.66], dx: 7 },
  { name: 'Luena', c: [19.91, -11.78], dx: 7 },
  { name: 'Sumbe', c: [13.84, -11.21], dx: 7 },
  { name: 'Kuito', c: [16.93, -12.38], dx: 7 },
  { name: 'Huambo', c: [15.74, -12.78], dx: -2, dy: 14 },
  { name: 'Benguela', c: [13.41, -12.58], dx: 7, dy: 4 },
  { name: 'Lubango', c: [13.49, -14.92], dx: 7 },
  { name: 'Moçâmedes', c: [12.15, -15.19], dx: 7, dy: 12 },
  { name: 'Menongue', c: [17.69, -14.66], dx: 7 },
  { name: 'Ondjiva', c: [15.73, -17.07], dx: 7, dy: -4 },
];

export default function AngolaMap() {
  const [lx, ly] = project(luanda);
  return (
    <figure className="angola-map">
      <svg
        viewBox="0 0 400 440"
        role="img"
        aria-labelledby="mapa-titulo mapa-desc"
      >
        <title id="mapa-titulo">Cobertura nacional a partir de Luanda</title>
        <desc id="mapa-desc">
          Mapa esquemático de Angola com ligações de Luanda para as capitais provinciais e vice-versa.
        </desc>
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2A66F6" stopOpacity=".22" />
            <stop offset="1" stopColor="#6B9ED2" stopOpacity=".08" />
          </linearGradient>
          <radialGradient id="hubGlow">
            <stop offset="0" stopColor="#2A66F6" stopOpacity=".55" />
            <stop offset="1" stopColor="#2A66F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="map-land">
          <path d={toPath(mainland)} fill="url(#mapFill)" />
          <path d={toPath(cabinda)} fill="url(#mapFill)" />
        </g>
        <g className="map-routes">
          {cities.map((city, i) => {
            const [x, y] = project(city.c);
            const mx = (lx + x) / 2;
            const my = (ly + y) / 2;
            const dx = x - lx;
            const dy = y - ly;
            const len = Math.hypot(dx, dy) || 1;
            const bend = Math.min(40, len * 0.18);
            const cx = mx - (dy / len) * bend;
            const cy = my + (dx / len) * bend;
            return (
              <path
                key={city.name}
                d={`M${lx} ${ly}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x} ${y}`}
                style={{ animationDelay: `${i * 90}ms` }}
              />
            );
          })}
        </g>
        <g className="map-cities">
          {cities.map((city) => {
            const [x, y] = project(city.c);
            return (
              <g key={city.name}>
                <circle cx={x} cy={y} r="3.6" />
                {city.label !== false && (
                  <text
                    x={x + (city.dx ?? 7)}
                    y={y + (city.dy ?? 4)}
                    textAnchor={city.anchor || 'start'}
                  >
                    {city.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
        <g className="map-hub">
          <circle cx={lx} cy={ly} r="26" fill="url(#hubGlow)" />
          <circle cx={lx} cy={ly} r="7" className="hub-dot" />
          <circle cx={lx} cy={ly} r="12" className="hub-ring" />
          <text x={lx - 14} y={ly + 4} textAnchor="end" className="hub-label">
            Luanda
          </text>
        </g>
      </svg>
      <figcaption>Representação esquemática: de Luanda para todas as províncias e vice-versa.</figcaption>
    </figure>
  );
}
