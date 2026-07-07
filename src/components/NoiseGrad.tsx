interface GradientStop {
  color: string;
  position?: number;
}

export default function NoiseGrad({
  className,
  children,
  color = 'var(--color-accent)',
  percent = null,
  direction = 'to bottom',
  baseFrequency = 0.2,
  numOctaves = 3,
}: {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  percent?: number | null;
  direction?: string;
  baseFrequency?: number;
  numOctaves?: number;
}) {
  const noiseSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="${numOctaves}" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
  </svg>`;

  const noiseUrl = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;

  const percentageString = percent ? (100 - percent).toString() + '%' : '';

  const colorTrans = `color-mix(in srgb, ${color} 20%, transparent)`;

  return (
    <div className={`relative isolate ${className ?? ''}`}>
      <div
        aria-hidden
        className="absolute inset-0 -z-11"
        style={{
          backgroundColor: color,
          maskImage: `linear-gradient(${direction}, black, transparent ${percentageString}), ${noiseUrl}`,
          maskComposite: 'intersect',
          WebkitMaskImage: `linear-gradient(${direction}, black, transparent ${percentageString}), ${noiseUrl}`,
          WebkitMaskComposite: 'source-in',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(${direction}, ${colorTrans}, transparent ${percentageString})`,
        }}
      />
      {children}
    </div>
  );
}
