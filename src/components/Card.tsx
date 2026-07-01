export default function Card(text: { text: string }) {
  return (
    <span className="inline-block bg-white p-2 rounded-2xl border-2 border-gray-400 ml-2">
      {text.text}
    </span>
  );
}
