import { type ReactNode } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import Carousel from './Carousel';
import NoiseGrad from './NoiseGrad';

//icons
import { TbKeyframes } from 'react-icons/tb';
import { IoMdTime } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';

function iconFunc(num = 1) {
  switch (num) {
    case 0:
      return <TbKeyframes className="h-full w-auto flex-1" />;
    case 1:
      return <IoMdTime className="h-full w-auto flex-1" />;
    case 2:
      return <MdDateRange className="h-full w-auto flex-1" />;
  }
}
function ArtInfo(info = '', value = '', icon = 0) {
  return (
    <div className="flex">
      <div className="h-6 w-full flex-1 shrink-0 align-middle">{iconFunc(icon)}</div>
      <div className="flex-2">{info}</div>
      <div className="text-midtone flex-5 font-bold">
        <span className="hover:animate-wiggle inline-block">{value}</span>
      </div>
    </div>
  );
}

interface ArtCardProps {
  title: string;
  img?: string;
  youtube?: string;
  youtubeAspect?: string;
  children?: ReactNode;
  software?: string[];
  frames?: string;
  time?: string; //time taken to make it
  date?: string; //date it was completed
  links?: string[][];
  wipsNum?: number;
  wips?: string[][];
  wipsPath?: string;
}

export default function ArtCard({
  title,
  img,
  youtube,
  youtubeAspect = '16/9',
  children, //text
  software = [''],
  frames = '',
  time = '',
  date = '',
  links = [['']], //write link first, then text representing the link, like: [["www.insta.com", "check it out on insta!"]]
  wipsNum = 3,
  wips,
  wipsPath = '',
}: ArtCardProps) {
  const [open, setOpen] = useState(false);

  function addPath(wipsVar: string[][]) {
    if (wipsVar == null) return [];
    return wipsVar.map((row) => [wipsPath + row[0], ...row.slice(1)]);
  }

  return (
    <>
      <div className="z-1 mb-4 flex flex-col md:flex-row">
        {/*left part*/}
        <NoiseGrad
          className={`bg-accent2 flex flex-3 border-white p-4 text-center align-middle text-wrap ${open ? 'h-auto flex-col rounded-t-2xl rounded-b-none border-x-2 border-t-2 md:rounded-l-2xl md:rounded-r-none md:border-y-2 md:border-r-0 md:border-l-2' : 'max-h-[150] justify-center rounded-2xl border-2'}`}
          childClassName={
            open ? 'rounded-t-2xl rounded-b-none md:rounded-l-2xl md:rounded-r-none' : 'rounded-2xl'
          }
          direction="to top"
          color="var(--color-black)"
          baseFrequency={0.6}
          xtraOpacity={50}
        >
          <div className={`${open ? 'md:sticky md:top-24' : ''} z-3 flex flex-col items-center`}>
            <h2
              className={`-mt-2 mb-1 transition-all duration-200 ease-in-out ${open ? 'h-auto opacity-100 md:h-0 md:opacity-0' : 'h-auto opacity-100'}`}
            >
              {title}
            </h2>
            {img && (
              <img
                src={img}
                className={`${open ? 'h-auto' : 'h-120'} aspect-auto w-full rounded-2xl py-2`}
                loading="lazy"
              ></img>
            )}
            {youtube && (
              <iframe
                src={youtube}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={`${open ? 'h-auto' : 'h-96'} w-full max-w-170 rounded-2xl`}
                style={{ aspectRatio: youtubeAspect }}
              ></iframe>
            )}
            <div>
              <button style={{ marginTop: '10px' }} onClick={() => setOpen(!open)}>
                {open ? 'less info' : 'more info'}
              </button>
            </div>

            {wips && (
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-midtone mb-1 font-medium">concepts, sketches, etc</p>
                <Carousel imgsToShow={wipsNum} imgs={addPath(wips)} />
              </div>
            )}
          </div>
        </NoiseGrad>

        {/*right part, shrinks width into 0, transparent when open == false*/}
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            open ? 'h-auto flex-2 flex-col opacity-100' : 'h-0 w-0 opacity-0'
          }`}
          style={{ minWidth: open ? undefined : 0 }}
        >
          <NoiseGrad
            className="bg-accent2 h-full flex-2 rounded-t-none rounded-b-2xl border-2 border-white p-4 text-left md:rounded-l-none md:rounded-r-2xl"
            childClassName="rounded-t-none rounded-b-2xl md:rounded-r-2xl md:rounded-l-none"
            direction="to top"
            color="var(--color-black)"
            baseFrequency={0.6}
            xtraOpacity={50}
          >
            <h2 className="mb-2 hidden shrink-0 truncate text-balance wrap-anywhere md:block">
              {title}
            </h2>
            <p className="mb-4 min-h-12 shrink-0 place-content-center">{children}</p>

            <div className="flex flex-col sm:flex-row md:flex-col">
              <div className="flex-1">
                {frames !== '' && ArtInfo('frames:', frames, 0)}
                {time !== '' && ArtInfo('time:', time, 1)}
                {date !== '' && ArtInfo('date:', date, 2)}
              </div>

              {software[0] !== '' && (
                <div className="mt-4 h-auto w-auto max-w-1000 flex-1 text-center sm:mt-0 sm:max-w-100 md:mt-4">
                  software used:
                  <br />
                  {software.map((tool, index) => (
                    <Card text={tool} key={index} />
                  ))}
                </div>
              )}
            </div>

            <br />

            {/*replace w button later*/}
            {links[0][0] !== '' && (
              <div className="">
                {links.map((link, index) => (
                  <div className="text-center">
                    <Link to={link[0].toString()} replace target="_blank" key={index}>
                      {link[1].toString()}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </NoiseGrad>
        </div>
      </div>
    </>
  );
}
