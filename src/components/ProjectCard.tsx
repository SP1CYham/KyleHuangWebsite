import { useContext, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Base from '../Base';
import HeaderGraphic from './HeaderGraphic';
import NoiseGrad from './NoiseGrad';
import Card from './Card';
import Imag from './Imag';
import asset from '../asset';
import { CategoryContext } from '../pages/Coding';

export default function ProjectCard({
  titleImg = null,
  title,
  titleShadow,
  pixel = false,
  tagline,
  img,
  itchio,
  itchioEmbed, //just the number
  itchioEmbedMobile, //just the number
  children,
  uses = [''],
  ss = [],
  ssPath = '/',
  links = [],
}: {
  titleImg?: string | null;
  title: string;
  titleShadow?: string | null;
  pixel?: boolean;
  tagline?: string;
  img?: string;
  itchio?: string;
  itchioEmbed?: number | null;
  itchioEmbedMobile?: number | null;
  children: ReactNode;
  uses?: string[];
  ss?: string[][];
  ssPath?: string;
  links?: string[][];
}) {
  const { resetProjIndex } = useContext(CategoryContext)!;

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
                src={'https://itch.io/embed-upload/' + itchioEmbed}
                title={`${title} on itch.io`}
                className="hidden aspect-video h-auto w-full rounded-2xl md:block"
              >
                <a href={itchio}>Play {title} on itch.io</a>
              </iframe>

              {/* mobile (embed) */}
              <iframe
                src={'https://itch.io/embed/' + itchioEmbedMobile?.toString()}
                title={`${title} on itch.io`}
                className="bg-accent block h-auto w-full rounded-2xl md:hidden"
              >
                <a href={itchio}>Play {title} on itch.io</a>
              </iframe>
            </div>
          )}

          <div className="flex grow-0 flex-col-reverse gap-4 md:flex-row">
            {/*left part */}
            <div className="mb-10 flex-3">
              <div className="mb-10">{children}</div>

              <h2>Technology & Features:</h2>
              {uses.map((use, _) => (
                <Card text={use} />
              ))}

              {links.length !== 0 && <h2 className="mt-6">Links!</h2>}
              {links.map((link, index) => (
                <Link
                  to={link[0].toString()}
                  replace
                  target="_blank"
                  key={index}
                  className="flex-1"
                >
                  <button>{link[1].toString()}</button>
                </Link>
              ))}
            </div>

            {/*right part */}
            <div className="flex flex-1 items-center justify-center md:flex-col md:justify-start md:gap-2">
              <div className="hidden text-center font-bold md:block">Screenshots & WIPS:</div>
              {ss.map((link, index) => (
                <div className="-mx-2 flex items-center justify-center" key={index}>
                  <Imag
                    src={asset(ssPath + link[0])}
                    desc={link[1]}
                    className="flex-1"
                    imgClassName="object-contain"
                    h={125}
                  ></Imag>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <button className="w-[80%]" onClick={resetProjIndex}>
              Close
            </button>
          </div>
        </NoiseGrad>
      </Base>
    </>
  );
}
