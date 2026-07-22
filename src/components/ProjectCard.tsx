import Base from '../Base';
import HeaderGraphic from './HeaderGraphic';
import { type ReactNode } from 'react';
import NoiseGrad from './NoiseGrad';
import Card from './Card';
import asset from '../asset';

export default function ProjectCard({
  titleImg = null,
  title,
  titleShadow,
  pixel = false,
  tagline,
  img,
  itchio,
  itchioEmbed,
  itchioEmbedMobile /*just the normal embed option*/,
  children,
  uses = [''],
  ss = [''],
  ssPath = '/',
}: {
  titleImg?: string | null;
  title: string;
  titleShadow?: string | null;
  pixel?: boolean;
  tagline?: string;
  img?: string;
  itchio?: string;
  itchioEmbed?: string;
  itchioEmbedMobile?: string;
  children: ReactNode;
  uses?: string[];
  ss?: string[];
  ssPath?: string;
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
          className="rounded-3xl border-2 border-white p-4 align-middle text-wrap"
          childClassName="rounded-3xl"
          baseFrequency={4}
          color="var(--color-accent2)"
        >
          <h1 className="">{title}</h1>
          {tagline !== null && <h2 className="text-center">{tagline}</h2>}

          {img && (
            <div className="mt-4 mb-10 flex w-full justify-center">
              <img src={asset(img)} className="h-auto max-h-80 w-full"></img>
            </div>
          )}

          {itchio && (
            <div className="mt-4 mb-10 flex w-full justify-center">
              {/* desktop (game embed) */}
              <iframe
                src={itchioEmbed}
                title={`${title} on itch.io`}
                className="hidden aspect-video h-auto w-full rounded-2xl md:block"
              >
                <a href={itchio}>Play {title} on itch.io</a>
              </iframe>

              {/* mobile (embed) */}
              <iframe
                src={itchioEmbedMobile ?? itchioEmbed}
                title={`${title} on itch.io`}
                className="bg-accent block h-auto w-full rounded-2xl md:hidden"
              >
                <a href={itchio}>Play {title} on itch.io</a>
              </iframe>
            </div>
          )}

          <div className="flex grow-0 flex-col-reverse gap-4 md:flex-row">
            <div className="flex-2">
              <div className="mb-10">{children}</div>

              <h2>Technology:</h2>
              {uses.map((use, _) => (
                <Card text={use} />
              ))}
            </div>
            <div className="flex flex-1 justify-center md:flex-col">
              {ss.map((link, index) => (
                <div className="p-5">
                  <img
                    key={index}
                    src={asset(ssPath + link)}
                    className="h-auto w-full max-w-80"
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </NoiseGrad>
      </Base>
    </>
  );
}
