export default function NoiseGrad({
  className,
  childClassName,
  style,
  children,
  color = 'var(--color-accent)',
  percent = null,
  direction = 'to bottom',
  baseFrequency = 0.2,
  numOctaves = 3,
  xtraOpacity = 20,
  head = false,
  headScaleX = 1,
}: {
  className?: string;
  childClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  color?: string;
  percent?: number | null;
  direction?: string;
  baseFrequency?: number;
  numOctaves?: number;
  xtraOpacity?: number;
  head?: boolean;
  headScaleX?: number;
}) {
  const noiseSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="${numOctaves}" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
  </svg>`;

  const noiseUrl = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;
  const percentageString = percent ? (100 - percent).toString() + '%' : '';
  const colorTrans = `color-mix(in srgb, ${color} ${xtraOpacity}%, transparent)`;

  return (
    <div className={`relative isolate ${className ?? ''}`} style={style}>
      {head && (
        <div
          className="text-accent2 -z-12 text-shadow-[0px_5px_0px_rgb(0_0_0/1)]"
          style={{
            transform: `scaleX(${headScaleX}) scaleY(1.25)`,
            fontSize: '36cqh',
          }}
        >
          {head ? children : null}
        </div>
      )}

      <div
        aria-hidden
        className={`absolute inset-0 -z-11 ${childClassName ?? ''}`}
        style={{
          backgroundColor: color,
          maskImage: `linear-gradient(${direction}, black, transparent ${percentageString}), ${noiseUrl}`,
          maskComposite: 'intersect',
          WebkitMaskImage: `linear-gradient(${direction}, black, transparent ${percentageString}), ${noiseUrl}`,
          WebkitMaskComposite: 'source-in',
          transform: head ? `scaleX(${headScaleX}) scaleY(1.25)` : '',
          fontSize: head ? '36cqh' : '',
        }}
      >
        {head ? children : null}
      </div>

      <div
        aria-hidden
        className={`absolute inset-0 -z-11 ${childClassName ?? ''}`}
        style={{
          background: `linear-gradient(${direction}, ${colorTrans}, transparent ${percentageString})`,
          transform: head ? `scaleX(${headScaleX}) scaleY(1.25)` : '',
          fontSize: head ? '36cqh' : '',
        }}
      >
        {head ? children : null}
      </div>

      {!head ? children : null}
    </div>
  );
}
