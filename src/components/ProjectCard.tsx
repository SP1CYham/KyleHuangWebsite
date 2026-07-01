import { Link } from 'react-router-dom';

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
      <Link className="h-full min-w-0 flex-1" to={to}>
        <div className="flex h-full flex-col rounded-3xl border-2 border-gray-400 p-4 text-center align-middle text-wrap">
          <p className="shrink-0 truncate">{title}</p>

          <img className="flex min-h-0 flex-1 rounded-2xl object-cover py-2" src={img}></img>

          <p className="line-clamp-2 min-h-12 shrink-0 place-content-center">{text}</p>
        </div>
      </Link>
    </>
  );
}
