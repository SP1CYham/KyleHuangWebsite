import NoiseGrad from './NoiseGrad';

export default function HeaderGraphic({
  height,
  src = '/favicon.svg',
}: {
  height: number;
  src?: string;
}) {
  return (
    <NoiseGrad
      className="w-full"
      style={{ height: `${height + 10}px` }}
      baseFrequency={0.1}
      xtraOpacity={100}
      color="var(--color-shadow)"
    >
      <NoiseGrad
        className="w-full"
        style={{ height: `${height}px` }}
        baseFrequency={0.2}
        xtraOpacity={100}
        color="var(--color-accent2)"
      >
        <NoiseGrad
          className="w-full"
          style={{ height: `${height - 10}px` }}
          xtraOpacity={40}
          baseFrequency={0.2}
        >
          <NoiseGrad
            className="w-full"
            style={{ height: `${height - 10}px` }}
            xtraOpacity={0}
            baseFrequency={3}
          >
            <img src={src} className="w-full p-4" style={{ height: `${height}px` }}></img>
          </NoiseGrad>
        </NoiseGrad>
      </NoiseGrad>
    </NoiseGrad>
  );
}
