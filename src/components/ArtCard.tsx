import { type ReactNode } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import Carousel from './Carousel';

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
      <div className="h-auto w-full flex-1 shrink-0 align-middle">{iconFunc(icon)}</div>
      <div className="flex-2">{info}</div>
      <div className="flex-7">{value}</div>
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
}: ArtCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="-z-10 mb-4 flex h-auto">
        {/*left part*/}
        <div
          className={`h-auto flex-3 flex-col border-gray-400 p-4 text-center align-middle text-wrap ${open ? 'rounded-l-2xl border-y-2 border-l-2' : 'rounded-2xl border-2'}`}
        >
          <div className="sticky top-24 z-0">
            {img && <img src={img} className="h-auto w-full rounded-2xl object-cover py-2"></img>}
            {youtube && (
              <iframe
                src={youtube}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full rounded-2xl"
                style={{ aspectRatio: youtubeAspect }}
              ></iframe>
            )}
            <button onClick={() => setOpen(!open)}>{open ? 'less info' : 'more info'}</button>

            {wips && open && (
              <div className="mt-3">
                <Carousel imgsToShow={wipsNum} imgs={wips} />
              </div>
            )}
          </div>
        </div>

        {/*right part, is gone when its not open*/}
        <div
          className={`h-auto flex-2 border-2 p-4 ${open ? 'rounded-r-2xl border-gray-400 text-left' : 'border-transparent'}`}
        >
          {open && (
            <>
              <p className="shrink-0 truncate">{title}</p>
              <p className="mb-4 min-h-12 shrink-0 place-content-center">{children}</p>

              {frames !== '' && ArtInfo('frames:', frames, 0)}
              {time !== '' && ArtInfo('time:', time, 1)}
              {date !== '' && ArtInfo('date:', date, 2)}

              {software[0] !== '' && (
                <div className="mt-4 h-auto w-auto text-center">
                  software used:
                  <br />
                  {software.map((tool, index) => (
                    <Card text={tool} key={index} />
                  ))}
                </div>
              )}
              <br />

              {/*replace w button later*/}
              {links[0][0] !== '' && (
                <div className="">
                  {links.map((link, index) => (
                    <Link to={link[0].toString()} replace target="_blank" key={index}>
                      {link[1].toString()}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
