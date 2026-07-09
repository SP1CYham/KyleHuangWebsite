import { type ReactNode } from 'react';
import NoiseGrad from './NoiseGrad';

export default function CategoryCard({
  title,
  children,
  img,
  onClick,
  flex = 1,
}: {
  title: string;
  children: ReactNode;
  img: string;
  onClick?: () => void;
  flex?: number;
}) {
  return (
    <div
      className="bg-accent2 group hover:bg-accent relative h-full min-w-0 overflow-hidden rounded-3xl transition-all duration-300 hover:cursor-pointer active:bg-white"
      style={{ flex }}
      onClick={onClick}
    >
      <img
        src={img}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-x-150 group-hover:rotate-3 group-active:scale-200 group-active:-rotate-3"
        style={{
          mixBlendMode: 'multiply',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <NoiseGrad
          className="flex h-full flex-col rounded-3xl transition-all"
          childClassName="rounded-3xl transition-all"
          direction="170deg"
        >
          <NoiseGrad
            className="flex h-full flex-col rounded-3xl border-2 border-white transition-all"
            childClassName="rounded-3xl transition-all"
            color="var(--color-accent)"
            percent={60}
            xtraOpacity={0}
            baseFrequency={3}
            direction="170deg"
          >
            <p className="text-shadow-accent2 ml-1 flex-4 shrink-0 text-left text-6xl font-bold -tracking-widest italic transition-all duration-300 text-shadow-lg/100 group-hover:text-[4em] group-hover:text-shadow-[10px_10px_0px_rgb(0_0_0/1)] group-active:text-[3em]">
              {title}
            </p>
            <p className="group-hover:animate-hover line-clamp-2 inline-block min-h-12 flex-1 shrink-0 place-content-end p-4 text-right align-text-bottom text-wrap">
              {children}
            </p>
          </NoiseGrad>
        </NoiseGrad>
      </div>
    </div>
  );
}
