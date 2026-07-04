export default function Card(text: { text: string }) {
  return (
    <span className="ml-2 inline-block rounded-2xl border-2 border-gray-400 bg-white px-2 py-1">
      {text.text}
    </span>
  );
}
