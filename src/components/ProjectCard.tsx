import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  text,
  img,
  to,
}: {
  title: string;
  text: string;
  img: string;
  to: string;
}) {
  return (
    <>
      <Link className="flex-1 h-full min-w-0" to={to}>
        <div
          className="border-2 border-gray-400 rounded-3xl h-full
        p-4 text-center align-middle text-wrap
        flex flex-col"
        >
          <p className="truncate shrink-0">{title}</p>

          <img
            className="flex flex-1 min-h-0 py-2 rounded-2xl object-cover"
            src={img}
          ></img>

          <p className="line-clamp-2 shrink-0 min-h-12 place-content-center">
            {text}
          </p>
        </div>
      </Link>
    </>
  );
}
