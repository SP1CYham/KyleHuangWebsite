import { type ReactNode } from 'react';
import Card from './Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ArtCardProps {
  title: string;
  img: string;
  children: ReactNode;
  tools?: string[];
  links?: string[][];
}

export default function ArtCard({
  title,
  img,
  children, //text
  tools = [''],
  links = [['']], //write link first, then text representing the link, like: [["www.insta.com", "check it out on insta!"]]
}: ArtCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-4 flex h-auto">
        <div
          className={`h-auto flex-3 flex-col border-gray-400 p-4 text-center align-middle text-wrap ${open ? 'rounded-l-2xl border-y-2 border-l-2' : 'rounded-2xl border-2'}`}
          onClick={() => setOpen(!open)}
        >
          <img
            src={img}
            className="sticky top-24 -z-40 h-auto w-full rounded-2xl object-cover py-2"
          ></img>
        </div>

        {/*right part, is gone when its not open*/}
        <div
          className={`h-auto flex-2 border-2 p-4 ${open ? 'rounded-r-2xl border-gray-400 text-left' : 'border-transparent'}`}
        >
          {open && (
            <>
              <p className="shrink-0 truncate">{title}</p>
              <p className="min-h-12 shrink-0 place-content-center">{children}</p>

              {tools[0] !== '' && (
                <div className="mt-4 h-auto w-auto text-center">
                  software used:
                  <br />
                  {tools.map((tool, index) => (
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
                      <Card text={link[1].toString()} />
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
