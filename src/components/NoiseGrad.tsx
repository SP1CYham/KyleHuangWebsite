import { NoiseGradBase } from './NoiseGradBase';

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
  const percentageString = percent ? (100 - percent).toString() + '%' : '';
  const colorTrans = `color-mix(in srgb, ${color} ${xtraOpacity}%, transparent)`;

  return (
    <div className={`relative isolate ${className ?? ''}`} style={style}>
      {NoiseGradBase({
        className: head ? className : childClassName,
        children: head ? children : null,
        color: color,
        percent: percent ? percent : 0,
        direction: direction,
        baseFrequency: baseFrequency,
        numOctaves: numOctaves,
        head: head,
        headScaleX: headScaleX,
      })}
      <div
        aria-hidden
        className={`absolute inset-0 -z-11 ${childClassName ?? ''}`}
        style={{
          background: `linear-gradient(${direction}, ${colorTrans}, transparent ${percentageString})`,
        }}
      />
      {!head ? children : null}
    </div>
  );
}
