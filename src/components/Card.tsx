export default function Card(text: { text: string }) {
  return (
    <span className="bg-accent2 mx-1 line-clamp-1 inline-block cursor-default rounded-2xl border-2 border-white px-2 py-1 text-nowrap transition-all hover:font-bold">
      {text.text}
    </span>
  );
}
