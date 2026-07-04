import Base from '../Base';
import HeaderGraphic from './HeaderGraphic';
import { type ReactNode } from 'react';

export default function ProjectCard({
  title,
  tagline,
  img,
  children,
}: {
  title: string;
  tagline?: string;
  img?: string;
  children: ReactNode;
}) {
  return (
    <>
      <HeaderGraphic />

      <Base>
        <div className="rounded-3xl border-2 border-gray-400 p-4 text-center align-middle text-wrap">
          <h1 className="">{title}</h1>
          {tagline !== null && <h2 className="">{tagline}</h2>}
          <img src={img} className="h-auto max-h-80 w-full"></img>
          <p>{children}</p>
        </div>
      </Base>
    </>
  );
}
