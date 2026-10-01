// Decorative node/edge constellation (static SVG, no canvas, no particles).
// Nodes sit on the edges of the viewBox so the centre stays clean for text.
const NODES = [
  // left cluster
  [96, 180], [262, 118], [332, 300], [168, 424], [384, 522], [118, 646], [300, 762], [462, 690],
  // right cluster
  [1122, 138], [1302, 222], [1212, 382], [1362, 474], [1078, 560], [1252, 644], [1382, 786], [1012, 296],
]
const EDGES = [
  [0, 1], [1, 2], [0, 3], [2, 3], [2, 4], [3, 5], [3, 4], [4, 7], [5, 6], [6, 7],
  [8, 9], [8, 15], [15, 10], [9, 10], [10, 11], [10, 12], [12, 13], [11, 13], [13, 14], [9, 11],
]
const PULSE = new Set([2, 5, 10, 13])

export default function NetworkLines({ className = '', draw = true }) {
  return (
    <svg
      className={`network ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="network-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6f8dff" />
          <stop offset="100%" stopColor="#9b7bff" />
        </linearGradient>
      </defs>
      <g className="network__edges" stroke="url(#network-stroke)" strokeWidth="1" fill="none">
        {EDGES.map(([a, b]) => (
          <path
            key={`${a}-${b}`}
            d={`M${NODES[a][0]} ${NODES[a][1]} L${NODES[b][0]} ${NODES[b][1]}`}
            pathLength="1"
            className="network__edge"
            data-network-edge={draw ? '' : undefined}
          />
        ))}
      </g>
      <g className="network__nodes">
        {NODES.map(([x, y], i) => (
          <g key={i} className={`network__node ${PULSE.has(i) ? 'is-pulse' : ''}`} data-network-node={draw ? '' : undefined}>
            <circle cx={x} cy={y} r={PULSE.has(i) ? 10 : 7} className="network__halo" />
            <circle cx={x} cy={y} r={PULSE.has(i) ? 3.2 : 2.4} className="network__dot" />
          </g>
        ))}
      </g>
    </svg>
  )
}
