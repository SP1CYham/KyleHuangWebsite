export function NoiseGradBase({
  className,
  children,
  color = 'var(--color-accent)',
  percent,
  direction = 'to bottom',
  baseFrequency = 0.2,
  numOctaves = 3,
  head = false,
  headScaleX = 1,
}: {
  className?: string;
  children?: React.ReactNode | null;
  color?: string;
  percent?: number;
  direction?: string;
  baseFrequency?: number;
  numOctaves?: number;
  head?: boolean;
  headScaleX?: number;
}) {
  const noiseSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="${numOctaves}" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
  </svg>`;

  const percentageString = percent ? (100 - percent).toString() + '%' : '';
  const noiseUrl = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;

  return (
    <div
      aria-hidden
      className={`${head === false ? 'absolute inset-0 -z-11' : ''}${className ?? ''}`}
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
      {children}
    </div>
  );
}
