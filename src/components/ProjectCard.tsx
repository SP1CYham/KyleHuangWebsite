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
      <a className="flex-1" href={to}>
        <div
          className="border-2 border-gray-400 rounded-3xl
        p-4 text-center align-middle h-fit"
        >
          <p className="">{title}</p>
          <span className="justify-center flex min-h-30 max-h-30">
            <img src={img} className="w-full" />
          </span>
          <p>{text}</p>
        </div>
      </a>
    </>
  );
}
