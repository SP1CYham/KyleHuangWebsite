import { useRef, useState, useEffect } from 'react';

import NoiseGrad from './NoiseGrad';
import asset from '../asset';

export default function HeaderGraphic({
  height = 300,
  src,
  srcPixel = false,
  title = 'SPICYHAM',
  titleShadowColor = null,
  scaleXMultiplier = 0.24,
  scaleXBase = -0.03,
  scaleXMin = 0.5,
  scaleXMax = 100,
  finalMult = 1,
}: {
  height?: number;
  src?: string | null;
  srcPixel?: boolean;
  title?: string;
  titleShadowColor?: string | null;
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
      className="-mb-10 w-full"
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
            color="var(--color-midtone)"
          >
            {src && (
              <div
                className="flex h-auto w-auto justify-center align-middle"
                style={srcPixel ? { imageRendering: 'pixelated' } : {}}
              >
                <img
                  src={asset(src)}
                  className="h-full w-full object-contain p-4 align-middle drop-shadow-2xl"
                  style={{
                    filter: `drop-shadow(0 8px 10px ${titleShadowColor})`,
                    maxHeight: `${height - 40}px`,
                  }}
                ></img>
              </div>
            )}
            {src == null && (
              <div className="@container-size h-full w-full hover:cursor-default">
                <div className="flex h-full w-full flex-col items-center px-20 pt-7 pb-14">
                  <NoiseGrad
                    ref={containerRef}
                    className="bg-accent2 w-full max-w-200 min-w-110 rounded-t-full shadow-[0px_5px_0px_rgb(0_0_0/1)]"
                    childClassName="w-full max-w-200 min-w-110 rounded-t-full"
                    direction="to bottom"
                    color="var(--color-head-dark)"
                    baseFrequency={0.1}
                    percent={30}
                    overrideColor="var(--color-midtone)"
                    overridePercent={50}
                    xtraOpacity={30}
                    overrideDirection="to top"
                    style={{ flex: '0 0 15%' }}
                  />

                  <div className="max-w-200 shrink-0 grow-0 basis-[70%] scale-y-110 items-center justify-center text-center font-[Impact] font-black tracking-tight whitespace-nowrap">
                    <NoiseGrad
                      className="absolute inset-0"
                      childClassName="bg-clip-text text-transparent z-50"
                      color="var(--color-head-light)"
                      baseFrequency={3}
                      percent={20}
                      direction="to top"
                      xtraOpacity={90}
                      overrideColor="var(--color-midtone)"
                      overridePercent={60}
                      head={true}
                      headScaleX={scaleX * finalMult}
                    >
                      {title}
                    </NoiseGrad>
                  </div>

                  <NoiseGrad
                    className="bg-head-mid w-full max-w-200 min-w-110 rounded-b-full shadow-[0px_5px_0px_rgb(0_0_0/1)]"
                    childClassName="w-full max-w-200 min-w-110 rounded-b-full"
                    direction="to top"
                    color="var(--color-midtone)"
                    xtraOpacity={0}
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
