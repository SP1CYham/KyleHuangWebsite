export default function Card(text: { text: string }) {
  return (
    <span className="bg-accent2 m-1 inline-block rounded-2xl border-2 border-white px-2 py-1">
      {text.text}
    </span>
  );
}
