import { forwardRef } from 'react';

const NoiseGrad = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    childClassName?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    color?: string;
    percent?: number | null;
    direction?: string;
    overrideColor?: string | null; //for 2nd gradiuent
    overridePercent?: number | null; //for 2nd gradient
    overrideDirection?: string | null; //for 2nd gradient
    baseFrequency?: number;
    numOctaves?: number;
    xtraOpacity?: number;
    head?: boolean;
    headScaleX?: number;
  }
>(
  (
    {
      className,
      childClassName,
      style,
      children,
      color = 'var(--color-accent)',
      percent = null,
      direction = 'to bottom',
      overrideColor,
      overridePercent,
      overrideDirection,
      baseFrequency = 0.2,
      numOctaves = 3,
      xtraOpacity = 20,
      head = false,
      headScaleX = 1,
    },
    ref,
  ) => {
    const noiseSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="${numOctaves}" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
  </svg>`;

    const noiseUrl = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;
    const percentageString = percent ? (100 - percent).toString() + '%' : '';
    const secondePercentageString = overridePercent
      ? (100 - overridePercent).toString() + '%'
      : percentageString;
    const colorTrans = `color-mix(in srgb, ${overrideColor ? overrideColor : color} ${xtraOpacity}%, transparent)`;
    overrideDirection ? overrideDirection : (overrideDirection = direction);

    return (
      <div className={`relative isolate ${className ?? ''}`} style={style} ref={ref}>
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
            maskComposite: 'intersect',
            backgroundImage: `linear-gradient(${overrideDirection}, ${colorTrans}, transparent ${secondePercentageString})`,
            transform: head ? `scaleX(${headScaleX}) scaleY(1.25)` : '',
            fontSize: head ? '36cqh' : '',
          }}
        >
          {head ? children : null}
        </div>

        {!head ? children : null}
      </div>
    );
  },
);

NoiseGrad.displayName = 'NoiseGrad';

export default NoiseGrad;
