import { type ReactNode } from "react";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  tools = [""],
  links = [[""]], //write link first, then text representing the link, like: [["www.insta.com", "check it out on insta!"]]
}: ArtCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-auto mb-4">
        <div
          className={`border-gray-400 h-auto
        p-4 text-center align-middle text-wrap flex-3 flex-col
        ${open ? "rounded-l-2xl border-y-2 border-l-2" : "rounded-2xl border-2"}`}
          onClick={() => setOpen(!open)}
        >
          <img
            src={img}
            className="w-full h-auto py-2 rounded-2xl object-cover sticky top-24 -z-40"
          ></img>
        </div>

        {/*right part, is gone when its not open*/}
        <div
          className={`flex-2 h-auto p-4 border-2 ${open ? " border-gray-400 rounded-r-2xl text-left" : "border-transparent"}`}
        >
          {open && (
            <>
              <p className="truncate shrink-0">{title}</p>
              <p className="shrink-0 min-h-12 place-content-center">
                {children}
              </p>

              {tools[0] !== "" && (
                <div className="mt-4 w-auto h-auto text-center">
                  software used:
                  <br />
                  {tools.map((tool, index) => (
                    <Card text={tool} key={index} />
                  ))}
                </div>
              )}
              <br />

              {/*replace w button later*/}
              {links[0][0] !== "" && (
                <div className="">
                  {links.map((link, index) => (
                    <Link
                      to={link[0].toString()}
                      replace
                      target="_blank"
                      key={index}
                    >
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
