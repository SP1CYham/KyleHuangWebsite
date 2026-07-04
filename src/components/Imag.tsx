import { useOverlay } from './ImagOverlay';

export default function Imag({ src, desc }: { src: string; desc: string }) {
  const { show } = useOverlay();

  function handleImagClick() {
    console.log('ckicekd');
    show({ src: src, desc: desc });
  }

  return (
    <div onClick={() => handleImagClick()} className="active:bg-amber-300">
      <img src={src} className="max-h-24 max-w-24"></img>
    </div>
  );
}
