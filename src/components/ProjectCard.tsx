import Base from '../Base';
import HeaderGraphic from './HeaderGraphic';
import { type ReactNode } from 'react';
import NoiseGrad from './NoiseGrad';

export default function ProjectCard({
  titleImg = null,
  title,
  titleShadow,
  pixel = false,
  tagline,
  img,
  children,
}: {
  titleImg?: string | null;
  title: string;
  titleShadow?: string | null;
  pixel?: boolean;
  tagline?: string;
  img?: string;
  children: ReactNode;
}) {
  return (
    <>
      <HeaderGraphic
        height={400}
        src={titleImg}
        title={title}
        srcPixel={pixel}
        titleShadowColor={titleShadow}
      />

      <Base>
        <NoiseGrad
          className="rounded-3xl border-2 border-white p-4 text-center align-middle text-wrap"
          childClassName="rounded-3xl"
          baseFrequency={4}
          color="var(--color-accent2)"
        >
          <h1 className="">{title}</h1>
          {tagline !== null && <h2 className="">{tagline}</h2>}
          <img src={img} className="h-auto max-h-80 w-full"></img>
          <p>{children}</p>
        </NoiseGrad>
      </Base>
    </>
  );
}
