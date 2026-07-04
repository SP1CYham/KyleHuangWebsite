export default function CategoryCard({
  title,
  text,
  img,
  onClick,
  flex = 1,
}: {
  title: string;
  text: string;
  img: string;
  onClick?: () => void;
  flex?: number;
}) {
  return (
    <>
      <div className="h-full min-w-0" style={{ flex: flex }} onClick={onClick}>
        <div className="flex h-full flex-col rounded-3xl border-2 border-gray-400 p-1 text-center align-middle text-wrap">
          <p className="shrink-0 truncate">{title}</p>

          <img className="flex min-h-0 flex-1 rounded-2xl object-cover py-2" src={img}></img>

          <p className="line-clamp-2 min-h-12 shrink-0 place-content-center">{text}</p>
        </div>
      </div>
    </>
  );
}
