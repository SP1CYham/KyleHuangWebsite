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
      style={{ height: `${height}px` }}
      baseFrequency={0.2}
      color="var(--color-accent2)"
    >
      <NoiseGrad
        className="w-full"
        style={{ height: `${height - 10}px` }}
        xtraOpacity={60}
        baseFrequency={0.5}
      >
        <img src={src} className="w-full p-4" style={{ height: `${height}px` }}></img>
      </NoiseGrad>
    </NoiseGrad>
  );
}
