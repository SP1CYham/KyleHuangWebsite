export default function Card(text: { text: string }) {
  return (
    <span className="bg-accent2 m-1 inline-block cursor-default rounded-2xl border-2 border-white px-2 py-1 transition-all hover:font-bold">
      {text.text}
    </span>
  );
}
