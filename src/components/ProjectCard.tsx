import { useContext, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Base from '../Base';
import HeaderGraphic from './HeaderGraphic';
import NoiseGrad from './NoiseGrad';
import Card from './Card';
import Imag from './Imag';
import asset from '../asset';
import { CategoryContext } from '../pages/Coding';
import { AppContext } from '../App';

export function Itchio({
  title,
  itchio,
  itchioEmbed = null, //just the number
  itchioEmbedMobile = null, //just the number
  mobile,
}: {
  title: string;
  itchio?: string;
  itchioEmbed?: number | null;
  itchioEmbedMobile?: number | null;
  mobile: boolean;
}) {
  const bgColor = '2629BD';
  const textColor = 'FFF8E2';
  const buttonColor = '2B7836';

  const extraString = `?border_width=0&amp;bg_color=${bgColor}&amp;fg_color=${textColor}&amp;link_color=${buttonColor};border_color=000000`;
  const widget = 'https://itch.io/embed/' + itchioEmbedMobile?.toString() + extraString;
  console.log(widget);
  //doesnt work for some reason i guess itch io is weird

  const extraStringGame = `?color=${bgColor}`;

  return (
    <div className="mt-4 mb-10 flex w-full justify-center">
      {/* desktop (game embed) */}
      {!mobile && itchioEmbed !== null && (
        <iframe
          src={'https://itch.io/embed-upload/' + itchioEmbed + extraStringGame}
          title={`${title} on itch.io`}
          className="aspect-video h-auto w-full rounded-2xl border-2 border-white"
          color="var(--color-accent2)"
        >
          <a href={itchio}>Play {title} on itch.io</a>
        </iframe>
      )}

      {/* mobile (widget embed) */}
      {(mobile || itchioEmbed === null) && itchioEmbedMobile !== null && (
        <iframe
          src={widget}
          title={`${title} on itch.io`}
          className="h-auto w-full rounded-2xl border-2 border-white"
          color="var(--color-accent2)"
        >
          <a href={itchio}>Play {title} on itch.io</a>
        </iframe>
      )}
    </div>
  );
}

export default function ProjectCard({
  titleImg = null,
  title,
  titleShadow,
  pixel = false,
  video,
  videoLoop = false,
  imgMinusHeight = 0,
  tagline,
  img,
  youtube,
  itchio,
  itchioEmbed = null, //just the number
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
  video?: string;
  videoLoop?: boolean;
  imgMinusHeight?: number;
  tagline?: string;
  img?: string;
  youtube?: string;
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
  const { mobile } = useContext(AppContext)!;

  return (
    <>
      <HeaderGraphic
        height={400}
        src={titleImg}
        video={video}
        videoLoop={videoLoop}
        title={title}
        srcPixel={pixel}
        titleShadowColor={titleShadow}
        imgMinusHeight={imgMinusHeight}
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

          {youtube && (
            <iframe
              src={youtube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mt-4 mb-10 aspect-video h-auto w-full rounded-2xl"
            ></iframe>
          )}

          {itchio && Itchio({ title, itchio, itchioEmbed, itchioEmbedMobile, mobile })}

          <div className="flex grow-0 flex-col-reverse gap-4 md:flex-row">
            {/*left part */}
            <div className="mb-10 flex-3">
              <div className="mb-10">{children}</div>

              <h2>Technology & Features:</h2>
              {uses.map((use, index) => (
                <Card text={use} key={index} />
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
            <div className="bg-accent2 flex flex-1 items-center justify-center rounded-2xl border-2 border-white md:mb-8 md:flex-col md:justify-start md:gap-2">
              <div className="hidden pt-2 text-center leading-4 font-bold md:block">
                Screenshots
                <br />& WIPS:
              </div>
              {ss.map((link, index) => (
                <div className="-mx-2 flex items-center justify-center" key={index}>
                  <Imag
                    src={asset(ssPath + link[0])}
                    desc={link[1]}
                    className="flex-1"
                    imgClassName="object-contain px-4 hover:px-4 md:px-0 md:max-w-50"
                    h={mobile ? 75 : 125}
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
