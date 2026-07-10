import { useRef, useState, useEffect } from 'react';

import NoiseGrad from './NoiseGrad';
import { NoiseGradBase } from './NoiseGradBase';

export default function HeaderGraphic({
  height = 300,
  src,
  title = 'SPICYHAM',
  flex = 1,
  scaleXMultiplier = 0.3,
  scaleXBase = -0.5,
  scaleXMin = 0.5,
  scaleXMax = 100,
  finalMult = 1,
}: {
  height?: number;
  src?: string;
  title?: string;
  flex?: number;
  scaleXMultiplier?: number;
  scaleXBase?: number;
  scaleXMin?: number;
  scaleXMax?: number;
  finalMult?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(scaleXBase);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      const raw = scaleXBase + (width / 100) * scaleXMultiplier;
      const clamped = Math.min(scaleXMax, Math.max(scaleXMin, raw));
      setScaleX(clamped);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [scaleXBase, scaleXMultiplier, scaleXMin, scaleXMax]);

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
            {src && <img src={src} className="w-full p-4" style={{ height: `${height}px` }}></img>}
            {src == null && (
              <div className="[container-type:size] h-full w-full hover:cursor-default">
                <div className="flex h-full w-full flex-col items-center px-20 pt-7 pb-14">
                  <div
                    ref={containerRef}
                    className="bg-accent2 w-full max-w-200 min-w-53 rounded-t-full shadow-[0px_5px_0px_rgb(0_0_0/1)]"
                    style={{ flex: '0 0 15%' }}
                  />

                  <div className="flex max-w-200 shrink-0 grow-0 basis-[70%] scale-y-110 items-center justify-center overflow-hidden text-center font-[Impact] font-black tracking-tight whitespace-nowrap">
                    <div
                      className="text-accent2 text-shadow-[0px_5px_0px_rgb(0_0_0/1)]"
                      style={{
                        transform: `scaleX(${scaleX * finalMult}) scaleY(1.25)`,
                        fontSize: '36cqh',
                      }}
                    >
                      SPICYHAM
                    </div>

                    <NoiseGradBase
                      className="absolute inset-0 -z-11"
                      color="var(--color-accent2)"
                      baseFrequency={3}
                      direction="to bottom"
                      head={true}
                      headScaleX={scaleX * finalMult}
                    >
                      SPICYHAM
                    </NoiseGradBase>
                  </div>

                  <div
                    className="bg-accent2 w-full max-w-200 min-w-53 rounded-b-full shadow-[0px_5px_0px_rgb(0_0_0/1)]"
                    style={{ flex: '0 0 15%' }}
                  />
                </div>
              </div>
            )}
          </NoiseGrad>
        </NoiseGrad>
      </NoiseGrad>
    </NoiseGrad>
  );
}
